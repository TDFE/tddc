import type { BasicTarget } from '../utils/domTarget';
declare type ItemHeight<T> = (index: number, data: T) => number;
export interface Options<T> {
  containerTarget: BasicTarget;
  wrapperTarget: BasicTarget;
  itemHeight: number | ItemHeight<T>;
  overscan?: number;
}
declare const useVirtualList: <T = any>(
  list: T[],
  options: Options<T>,
) => readonly [
  {
    index: number;
    data: T;
  }[],
  (index: number) => void,
];
export default useVirtualList;
