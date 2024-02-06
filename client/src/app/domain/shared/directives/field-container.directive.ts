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
  @Input() description: string = '';
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
    this.description && this.addDescription();
    this.label && this.addLabel();
    this.maxwords && this.addWordsCounter();
    this.maxwords || this.numberOfWords.destroy();
  }

  ngAfterContentInit(): void {
    this.addStyles();
  }

  private addLabel() {
    const labelElement = this.renderer.createElement('div');
    labelElement.textContent = this.label;

    this.renderer.addClass(labelElement, 'text-lg');
    this.renderer.addClass(labelElement, 'font-semibold');
    this.renderer.addClass(labelElement, 'text-gray-800');
    this.renderer.addClass(labelElement, 'mb-1');

    this.renderer.insertBefore(
      this.el.nativeElement,
      labelElement,
      this.el.nativeElement.firstChild,
    );
  }

  private addDescription() {
    const descriptionElement = this.renderer.createElement('div');
    descriptionElement.textContent = `Description: ${this.description}`;

    this.renderer.addClass(descriptionElement, 'text-sm');
    this.renderer.addClass(descriptionElement, 'font-medium');
    this.renderer.addClass(descriptionElement, 'text-gray-700');
    this.renderer.addClass(descriptionElement, 'mb-2');
    this.renderer.insertBefore(
      this.el.nativeElement,
      descriptionElement,
      this.el.nativeElement.firstChild,
    );
  }

  private addWordsCounter() {
    const parentElement = this.renderer.createElement('div');
    const maxWordsElement = this.renderer.createElement('div');
    const wordsElement = this.renderer.createElement('div');

    maxWordsElement.textContent = `Max ${this.maxwords} words`;
    wordsElement.textContent = `0/${this.maxwords}`;

    this.renderer.addClass(wordsElement, 'words'); // To update counter
    this.renderer.addClass(parentElement, 'flex');
    this.renderer.addClass(parentElement, 'align-items-center');
    this.renderer.addClass(parentElement, 'justify-content-between');
    this.renderer.addClass(parentElement, 'text-sm');
    this.renderer.addClass(parentElement, 'font-medium');
    this.renderer.addClass(parentElement, 'mt-1');
    this.renderer.addClass(parentElement, 'pt-1');
    this.renderer.addClass(parentElement, 'px-2');
    this.renderer.addClass(parentElement, 'pb-2');
    this.renderer.addClass(parentElement, 'text-gray-700');

    this.renderer.appendChild(parentElement, maxWordsElement);
    this.renderer.appendChild(parentElement, wordsElement);
    this.renderer.appendChild(this.el.nativeElement, parentElement);
  }

  private addStyles() {
    const addWidth = (className: string) => {
      const element: HTMLElement = this.el.nativeElement.querySelector(className);
      element && (element.style.width = '100%');
    };

    addWidth('.p-inputtext');
    addWidth('.p-dropdown');
  }

  private updateLabel(text: string) {
    console.log('updateLabel');
    const labelElement = this.el.nativeElement.querySelector('.words');
    if (labelElement) {
      labelElement.textContent = `${IBDWordCounter(text)}/${this.maxwords}`;
    }
  }
}
