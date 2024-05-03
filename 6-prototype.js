// BEGIN
class Money {
    constructor(value, currency = 'usd') {
      this.value = value;
      this.currency = currency;
    }
  
    getValue() {
      return this.value;
    }
  
    getCurrency() {
      return this.currency;
    }
  
    exchangeTo(currency) {
      let exchangedValue = this.value;
  
      if (this.currency === 'usd' && currency === 'eur') {
        exchangedValue *= 0.7;
      } else if (this.currency === 'eur' && currency === 'usd') {
        exchangedValue *= 1.2;
      }
  
      return new Money(exchangedValue, currency);
    }
  
    add(money) {
      let addedValue = money.currency === this.currency ? money.value : money.exchangeTo(this.currency).value;
      addedValue += this.value;
      
      return new Money(addedValue, this.currency);
    }
  
    format() {
      const formattedValue = this.value.toLocaleString(undefined, { style: 'currency', currency: this.currency });
      return formattedValue;
    }
  }
  
  export default Money;
// END
