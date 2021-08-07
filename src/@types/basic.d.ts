export interface Dictionary<T = any> {
  [key: string]: T;
}

export type Foo = () => void;

/** 列表接口返回数据格式约定 */
export interface ListResponeseData<T> {
  isFirst: boolean;
  isLastest: boolean;
  currentPage: number;
  totalRecords: number;
  content: T[];
}
