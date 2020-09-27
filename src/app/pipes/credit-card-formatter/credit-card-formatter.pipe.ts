import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormatter'
})
export class CreditCardFormatterPipe implements PipeTransform {

  transform(cardNumber: string): string {

    if (!this.hasCorrectLength(cardNumber)) {
      return 'Invalid Card Length.';
    }

    if (!this.isAllNumbers(cardNumber)) {
      return 'Invalid Characters.';
    }

    return this.formatCardNumber(cardNumber);
  }

  private hasCorrectLength(cardNumber: string): boolean {

    const cardNumberLenght = cardNumber.length;
    const isMasterDiscoverVisaCardLenght = 16;
    const isAmericanExpressCardLenght = 15;

    if (cardNumberLenght === isAmericanExpressCardLenght ||
      cardNumberLenght === isMasterDiscoverVisaCardLenght) {
        return true;
      }

    return false;
  }

  private isAllNumbers(cardNumber: string): boolean {
    const stringNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const totalValidCharacters = cardNumber.split('').filter((char) => stringNumbers.includes(char)).length;

    return totalValidCharacters === cardNumber.length;
  }

  private formatCardNumber(cardNumber: string): string {
    const parts = cardNumber.match(/[\s\S]{1,4}/g);

    return parts.join(' - ');
  }
}
