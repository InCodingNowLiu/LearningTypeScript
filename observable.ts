export class Observable<T> {}
import { Observable } from "./observable";
Observable.prototype.map = function(f) {};

import { Observable } from "./observable";

declare module "./observable" {
  interface Observable<T> {
    map<U>(f: (x: T) => U): Observable<U>;
  }
}

Observable.prototype.map;

export class Observable<T> {}

declare global {
  interface Array<T> {
    toObservable(): Observable<T>;
  }
}

Array.prototype.toObservable;
