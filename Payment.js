export default class Payment {
  _currecnys = ["RSD", "EUR"];
  _value;

  setCurrency(newCurrency) {
    if (this._currecnys.includes(newCurrency)) {
      this._currency = newCurrency;
    } else {
      throw new Error("Invalid currency");
    }
  }

  getCurrency() {
    return this._currency;
  }

  setValue(newValue) {
    if (newValue < 1) {
      throw new Error("Invalid value");
    } else if (newValue > 10000) {
      throw new Error("Invalid value");
    } else {
      this._value = newValue;
    }
  }
  getValue() {
    return this._value;
  }

  pay(bill, amount, currency, date) {
    const currentDate = new Date().getFullYear();

    if (amount > this._value) {
      throw new Error("You don't have enough money");
    } else if (!this._currency.includes(currency)) {
      throw new Error(`You cannot pay with ${currency}`);
    } else if (date !== currentDate) {
      throw new Error(`Your date is invalid`);
    } else {
      this.setValue(this._value - amount);
      console.log("\x1b[32m%s\x1b[0m", `Successfully paid ${bill}.`);
      console.log(
        "\x1b[32m%s\x1b[0m",
        `Your new balance is ${this.getValue()}.`
      );
    }
  }
}
