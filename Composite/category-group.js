
class CategoryGroup {

  constructor(name, composites = []) {
      this.name = name;
      this.composites = composites;
  }

  get total() {
    return this.composites.reduce((acc, item) => acc + item.total, 0);
  }

  print() {
    console.log(`\n${this.name.toUpperCase()}`);
    this.composites.forEach(item => item.print())
  }
}

module.exports = CategoryGroup;