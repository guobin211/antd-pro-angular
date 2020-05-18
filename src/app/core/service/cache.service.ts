import { Injectable } from '@angular/core';

@Injectable()
export class CacheService {

  constructor() { }

  public getData<T>(key: string): any {
    return JSON.parse(localStorage.getItem(key)) as T;
  }

  public setData(key: string, value: any) {
    if (typeof value === 'object') {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
  }
}
