import { Component, ViewChild, ElementRef } from '@angular/core';

import { CreditCardDirective } from './credit-card.directive';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

describe('CreditCardDirective', () => {
    let fixture: ComponentFixture<CreditCardDirectiveTestComponent>;
    let testComponent: CreditCardDirectiveTestComponent;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CreditCardDirective, CreditCardDirectiveTestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CreditCardDirectiveTestComponent);
    fixture.detectChanges();
    testComponent = fixture.debugElement.componentInstance;
  });
  it('should initial the test component ', async(() => {
    testComponent = fixture.debugElement.componentInstance;
    expect(testComponent).toBeTruthy();
  }));
  it('should initial the directive ', async(() => {
    const directive = testComponent.directive;
    expect(directive).toBeTruthy();
  }));
  it('should initial the card.js ', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div[data-jp-card-initialized="true"]')).toBeTruthy();
  }));
  it('should give input fields unique class name if they don\'t have name attributes ', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    const inputs: HTMLElement[] = Array.from(compiled.querySelectorAll('input'));
    const classIds = inputs.map(e => e.className);
    const uniqueIds = Array.from(new Set(classIds)); // Set would store unique values
    expect(uniqueIds.length).toBe(4);
  }));
});

@Component({
  template: `
    <div #container></div>
    <form [creditCard]="container"
          [cardWidth]="width"
          [numberInput]="number"
          [nameInput]="name"
          [expiryInput]="expiry"
          [cvcInput]="cvc"
          [debugMode]="true"
          [formatting]="true">
      <input #number/>
      <input #expiry/>
      <input #name/>
      <input #cvc/>
    </form>`
})
export class CreditCardDirectiveTestComponent {

  width = 360;

  @ViewChild(CreditCardDirective) directive: CreditCardDirective;
}
