import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  WritableSignal,
  effect,
  signal,
} from '@angular/core';
import { IBDWordCounter } from 'ibdevkit';

@Directive({
  selector: '[fieldContainer]',
  standalone: true,
})
export class FieldContainerDirective {
  @Input() label: string = '';
  @Input() bodyValue: string = '';
  @Input() maxwords: number = 0;
  @Input() signalBody: WritableSignal<any> = signal('');
  numberOfWords = effect(() => {
    this.updateLabel(this.signalBody()[this.bodyValue]);
  });

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.label && this.addLabel();
    this.maxwords && this.addWordsCounter();
    this.maxwords || this.numberOfWords.destroy();
  }

  ngAfterContentInit(): void {
    this.addStyles();
  }

  private addLabel() {
    const labelElement = this.renderer.createElement('div');
    this.renderer.addClass(labelElement, 'font-semibold');
    this.renderer.addClass(labelElement, 'text-gray-800');
    labelElement.textContent = this.label;

    this.renderer.insertBefore(
      this.el.nativeElement,
      labelElement,
      this.el.nativeElement.firstChild,
    );
  }

  private addStyles() {
    const addWidth = (className: string) => {
      const element: HTMLElement = this.el.nativeElement.querySelector(className);
      element && (element.style.width = '100%');
    };

    addWidth('.p-inputtext');
    addWidth('.p-dropdown');
  }

  private addWordsCounter() {
    // debe ser un div dentro dos div uno que diga max {{words.length}} words y al toro lado {{}}/{{maxwords}}
    const parentElement = this.renderer.createElement('div');
    const maxWordsElement = this.renderer.createElement('div');
    const wordsElement = this.renderer.createElement('div');
    maxWordsElement.textContent = `Max ${this.maxwords} words`;
    wordsElement.textContent = `0/${this.maxwords}`;
    this.renderer.addClass(parentElement, 'flex');
    this.renderer.addClass(parentElement, 'justify-content-between');
    this.renderer.addClass(parentElement, 'text-sm');
    this.renderer.addClass(parentElement, 'pt-1');
    this.renderer.addClass(parentElement, 'px-2');
    this.renderer.addClass(parentElement, 'pb-2');
    this.renderer.addClass(wordsElement, 'text-gray-700');
    this.renderer.addClass(maxWordsElement, 'text-gray-700');
    this.renderer.appendChild(parentElement, maxWordsElement);
    this.renderer.appendChild(parentElement, wordsElement);

    //insertar al final del elemento
    this.renderer.appendChild(this.el.nativeElement, parentElement);
  }

  private updateLabel(text: string) {
    const labelElement = this.el.nativeElement.querySelector('.words');
    if (labelElement) {
      labelElement.textContent = `${IBDWordCounter(text)}/${this.maxwords}`;
    }
  }
}
