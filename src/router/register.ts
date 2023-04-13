const register = Symbol('register');
const isPro = process.env.VUE_APP_IS_PRO;
const isDev = process.env.NODE_ENV === 'development';

class Register {
  modules: Set<string>;

  constructor() {
    this.modules = new Set();
  }

  /**
   * 检测模块是否加载，若未加载则动态加载
   * @param name 模块名
   */
  set(name: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.modules.has(name)) {
        this[register](name)
          .then(() => {
            resolve();
          })
          .catch(() => {
            reject();
          });
      }
    });
  }

  /**
   * 动态加载模块js
   * @param name 模块名
   */
  [register](name: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.type = 'text/javasecipt';
      script.async = true;

      script.onload = () => {
        resolve();
        // eslint-disable-next-line no-console
        console.log(
          `%c${name}模块已加载`,
          'color:#fff;background:#40b883;border-radius:5px;padding:2px 5px;',
        );
      };
      script.onerror = () => {
        reject();
        throw new Error(`找不到${name}模块`);
      };

      const devSrc = `./${name}.js?v=${new Date().getTime()}`;
      const proSrc = `../${name}/${name}.umd${isPro ? '.min' : ''}.js?v=${new Date().getTime()}`;
      script.src = isDev ? devSrc : proSrc;

      document.body.appendChild(script);
    });
  }
}

export default new Register();
