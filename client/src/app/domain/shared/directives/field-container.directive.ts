import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fieldContainer]',
  standalone: true,
})
export class FieldContainerDirective {
  @Input() label: string = '';
  @Input() maxwords: number = 0;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.label && this.addLabel();
    this.addWordsCounter();
  }

  private addLabel() {
    const labelElement = this.renderer.createElement('div');
    this.renderer.addClass(labelElement, 'label');
    labelElement.textContent = this.label;

    this.renderer.insertBefore(
      this.el.nativeElement,
      labelElement,
      this.el.nativeElement.firstChild,
    );
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
    this.renderer.addClass(maxWordsElement, 'max-words');
    this.renderer.addClass(wordsElement, 'words');
    this.renderer.appendChild(parentElement, maxWordsElement);
    this.renderer.appendChild(parentElement, wordsElement);

    //insertar al final del elemento
    this.renderer.appendChild(this.el.nativeElement, parentElement);
  }
}
