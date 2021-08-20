const register = Symbol('register');

class Register {
  modules: Set<string>;

  constructor() {
    this.modules = new Set();
  }

  set(name: string) {
    return new Promise((resolve, reject) => {
      if (!this.modules.has(name)) {
        console.log('1111: ', 1111);
      }
    });
  }

  [register](name: string) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.type = 'text/javasecipt';
      script.async = true;
    });
  }
}
