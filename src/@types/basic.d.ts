/*eslint @typescript-eslint/no-explicit-any: ["off"]*/
export interface Dictionary<T = any> {
  [key: string]: T;
}

export type Foo = () => void;
