import { Directive, Input, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { CreditCard, Placeholder, CardMessages, CardMasks } from './credit-card.model';

const generateUid = (() => {
  let id = 0;
  return () => `card-${++id}`;
})();

@Directive({
  selector: 'form[creditCard]',
})
export class CreditCardDirective implements AfterViewInit {
  @Input() set creditCard(container: HTMLElement) {
    this.container = container;
  }
  container: HTMLElement;

  @Input() cardWidth: number;

  @Input() formatting = false;

  @Input() placeholders: Placeholder = {
    number: '•••• •••• •••• ••••',
    name: 'Full Name',
    expiry: '••/••',
    cvc: '•••'
  };

  @Input() messages: CardMessages = {
    validDate: 'valid\nthru',
    monthYear: 'month/year'
  };
  @Input() masks: CardMasks = { cardNumber: false };

  @Input() numberInput: HTMLElement;
  @Input() expiryInput: HTMLElement;
  @Input() cvcInput: HTMLElement;
  @Input() nameInput: HTMLElement;

  @Input() debugMode = false;

  constructor(private readonly element: ElementRef, private readonly renderer: Renderer2) { }

  ngAfterViewInit() {
    const card = new CreditCard({
      form: this.element.nativeElement,
      container: this.container,
      width: this.cardWidth,
      formSelectors: {
        numberInput: this.getInputSelector(this.numberInput),
        expiryInput: this.getInputSelector(this.expiryInput),
        cvcInput: this.getInputSelector(this.cvcInput),
        nameInput: this.getInputSelector(this.nameInput)
      },
      formatting: this.formatting,
      placeholders: this.placeholders,
      messages: this.messages,
      masks: this.masks,
      debug: this.debugMode
    });
  }

  getInputSelector(el: HTMLElement): string {
    const form = this.element.nativeElement as HTMLFormElement;
    const elName = el.getAttribute('name');

    if (elName && form.querySelectorAll(`[name="${elName}"]`).length === 1) {
      return `[name="${elName}"]`;
    }

    const elClass = generateUid();

    this.renderer.addClass(el, elClass);

    return `.${elClass}`;
  }
}
