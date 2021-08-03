/**
 * 本地存储-sessionStorage
 * @class Session
 */
class Session {
  private cache: Storage;
  private prifix: string;

  constructor() {
    this.cache = window.sessionStorage;
    this.prifix = "lz_";
  }

  set(key: string, value: any) {
    this.cache.setItem(this.prifix + key, JSON.stringify(value));
  }

  get(key: string, fun?: (res: any) => any) {
    let value: any = this.cache.getItem(this.prifix + key);
    try {
      value = JSON.parse(value);
      if (!value && value !== false && value !== 0) {
        value = null;
      }
    } catch (error) {
      value = null;
    }
    return fun ? fun.call(this, value) : value;
  }

  remove(key: string) {
    this.cache.removeItem(this.prifix + key);
  }
}

export default new Session();
