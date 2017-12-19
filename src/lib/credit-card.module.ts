import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardDirective } from './credit-card.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CreditCardDirective],
  exports: [CreditCardDirective]
})
export class CreditCardModule { }
