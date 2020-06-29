

class AppMiddlewares {
  constructor() {
    this.inBoundMiddlewares = [];
    this.indexMiddleware = 0;
    this.initialData = {}
  }

  use(middleware) {
    if (typeof middleware === "function") return this.inBoundMiddlewares.push(middleware);
  }

  clearState = () => {
    this.indexMiddleware = 0;
    this.initialData = {}
  }

  next = (err) => {
    console.log(this.initialData)
    if (err) {
      this.clearState();
      throw err;
    }
    ++this.indexMiddleware;
    this.executeMiddlewares();
  }
  
  executeMiddlewares = () => {
    const { indexMiddleware, inBoundMiddlewares, initialData } = this;
    if (indexMiddleware === inBoundMiddlewares.length) return this.indexMiddleware = 0;
    inBoundMiddlewares[indexMiddleware](initialData, this.next);
  }

  run = () => {
    this.executeMiddlewares();
  }
}

module.exports = new AppMiddlewares();