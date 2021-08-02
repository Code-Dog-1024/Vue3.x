import { Foo } from "@/@types/basic.d";

/**
 * 数字添加分隔符并保留两位小数
 *
 * @param {number | string} value 数字或字符串格式数字
 * @param {number} tofix 保留小数位数(默认两位)
 * @template
 * ```js
 * formatNumber(1000) => 1,000.00
 * ```
 * @returns `string`
 */
export const formatNumber = (value: number | string, tofix = 2): string => {
  value = parseFloat(String(value));
  const arr = String(value).split(".");
  const intPartArr = arr[0].split("").reverse();
  let floatPart = arr[1] || "";

  if (intPartArr.length > 3) {
    const commaNum = Math.floor(intPartArr.length / 3);
    for (let index = 0; index < commaNum; index++) {
      intPartArr.splice(4 * index + 3, 0, ",");
    }
  }
  intPartArr.reverse();
  if (intPartArr[0] === ",") {
    intPartArr.splice(0, 1);
  }
  const intPart = intPartArr.join("");

  if (floatPart) {
    floatPart = Number("0." + floatPart)
      .toFixed(tofix)
      .split(".")[1];
  } else {
    floatPart = (0).toFixed(tofix).split(".")[1];
  }

  return `${intPart}.${floatPart}`;
};

interface DebounceReturn {
  (...arg: []): number;
}

/**
 * 节流
 *
 * @param {number} timeout 定时器时延
 * @param {Foo} callback 定时器回调
 * @returns {DebounceReturn} 定时器指针
 */
export const debounce = (timeout: number, callback: Foo): DebounceReturn => {
  let timer = 0;
  return (...arg) => {
    if (timer) clearTimeout(timer);
    timer = window.setTimeout(callback, timeout, arg);
    return timer;
  };
};

interface ThrottleReturn {
  (...arg: []): Foo;
}

/**
 * 防抖
 *
 * @param {number} timeout 定时器时延
 * @param {Foo} callback 定时器回调
 * @returns {ThrottleReturn} 用于清除定时器的函数
 */
export const throttle = (timeout: number, callback: Foo): ThrottleReturn => {
  let isFirst = true;
  let timer = 0;
  const clearFun: Foo = () => {
    clearTimeout(timer);
    timer = 0;
  };
  return (...arg) => {
    if (isFirst) {
      isFirst = false;
      callback(...arg);
      return clearFun;
    }
    if (timer) return clearFun;
    timer = window.setTimeout(() => {
      timer = 0;
      callback(...arg);
    }, timeout);
    return clearFun;
  };
};
