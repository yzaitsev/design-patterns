class Car {
  constructor(brand, type, productYear) {
    this.brand = brand;
    this.type = type;
    this.productYear = productYear;
  }

  addReplaceOption(name, value) {
    this[name] = value;
    return this[name];
  }

  removeOption(name) {
    if (this[name]) {
      delete this[name];
      return true;
    }
    return false;
  }

  get options() {
    let strOutput = '\n';
    Object.keys(this).forEach(optionName => strOutput = `${strOutput}${optionName}: ${this[optionName]}\n`);
    return strOutput;
  }

  clone() {
    const proto = Object.getPrototypeOf(this);
    const cloned = Object.create(proto);

    cloned.brand = this.brand;
    cloned.type = this.type;
    cloned.productYear = this.productYear;
    return cloned;
  }
}

module.exports = Car;