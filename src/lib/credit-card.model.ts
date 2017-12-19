import * as Card from 'card';

export class CreditCard extends Card {
    constructor (setting: CardSetting) {
        super(setting);
    }
}
// QJ.find = function (el: any, selector: any) {
//     if (el instanceof NodeList || el instanceof Array) {
//         el = el[0];
//       }
//     return typeof selector === 'object' ? selector : el.querySelectorAll(selector);
// };
export class Placeholder {
    number =  '•••• •••• •••• ••••';
    name = 'Full Name';
    expiry = '••/••';
    cvc = '•••';
}

export class CardSetting {
    form: HTMLElement;
    container: HTMLElement;
    width: number;
    formSelectors: {
        numberInput: string;
        expiryInput: string;
        cvcInput: string;
        nameInput: string;
    };
    formatting = true;
    messages: CardMessages;
    placeholders: Placeholder;
    masks: CardMasks;
    debug = false;
}

export class CardMessages {
    validDate: string;
    monthYear: string;
}

export class CardMasks {
    cardNumber: string | boolean;
}
