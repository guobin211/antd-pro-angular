import { randomId } from '../utils/';

export class BaseModel {
  id: string;
  createTime: number;
  constructor() {
    this.createTime = new Date().getTime();
    this.id = randomId();
  }

  mapperSet(props: string[], value: any) {
    for (const prop of props) {
      if (prop !== '' && this[prop] === undefined) {
        this[prop] = value;
      }
    }
  }
}

