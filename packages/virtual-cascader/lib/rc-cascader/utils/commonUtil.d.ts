import type {
  DefaultOptionType,
  FieldNames,
  InternalFieldNames,
  SingleValueType,
} from '../Cascader';
export declare const VALUE_SPLIT = '__RC_CASCADER_SPLIT__';
export declare const SHOW_PARENT = 'SHOW_PARENT';
export declare const SHOW_CHILD = 'SHOW_CHILD';
export declare function toPathKey(value: SingleValueType): string;
export declare function toPathKeys(value: SingleValueType[]): string[];
export declare function toPathValueStr(pathKey: string): string[];
export declare function fillFieldNames(fieldNames?: FieldNames): InternalFieldNames;
export declare function isLeaf(option: DefaultOptionType, fieldNames: FieldNames): any;
export declare function scrollIntoParentView(element: HTMLElement): void;
