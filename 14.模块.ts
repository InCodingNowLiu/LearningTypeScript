export interface StringValidator {
  isAcceptable(s: string): boolean;
}

export const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}

// 默认导出

// declare let $: JQuery;
// export default $;

// default 导出也可以是一个值
export default "123";

// declare function require(moduleName: string): any;

// import { ZipCodeValidator as Zip } from "./ZipCodeValidator";
// if (needZipValidation) {
//   let
// }

declare module "url" {
  export interface Url {
    protocol?: string;
    hostname?: string;
    pathname?: string;
  }
  export function parse(urlStr: string, parseQueryString?, slashesDenot?): Url;
}

declare module "hot-new-module";

import x, { y } from "hot-new-module";

x(y);

export default class SomeType {
  constructor() {}
}

export default function getThing() {
  return "thing";
}

export class Calculator {
  private current = 0;
  private memory = 0;
  private operator: string;
}
