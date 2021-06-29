/*eslint @typescript-eslint/no-explicit-any: ["off"]*/

import { Dictionary } from "@/@types/basic.d";

const types: Dictionary<string> = {};

"Number String Boolean Null Undefined Object Array Function Date RegExp Error"
  .split(" ")
  .forEach((item) => {
    types["[object " + item + "]"] = item.toLowerCase();
  });

/**
 * 判断数据类型
 *
 * @param {*} obj 任意类型数据
 * @template
 * ```js
 * type(1) => "number"
 * type({}) => "object"
 * type([]) => "array"
 * ```
 * @returns {string} 表示数据类型的字符串
 */
export const type = (obj: unknown): string => {
  if (obj === null) return "null";
  return typeof obj === "object"
    ? types[Object.prototype.toString.call(obj)] || "object"
    : typeof obj;
};

/**
 * 判断传入的数据是否为数组
 *
 * @param {*} obj 任意类型数据
 * @returns {boolean} true | false
 */
export const isArray = (obj: unknown): boolean => {
  if (Array.isArray) return Array.isArray(obj);
  return type(obj) === "array";
};

/**
 * 判断传入的数据是否为对象
 *
 * @param {*} obj 任意类型数据
 * @returns {boolean} true | false
 */
export const isObject = (obj: unknown): boolean => {
  return type(obj) === "object";
};

/**
 * 深拷贝
 *
 * @param {*} source 任意类型数据
 * @returns {*} source的副本
 */
export const clone = <T = any>(source: T): T => {
  let target: any;
  if (typeof source === "object") {
    target = isArray(source) ? [] : {};
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] =
          typeof source[key] === "object" ? clone(source[key]) : source[key];
      }
    }
  } else {
    target = source;
  }
  return target;
};
