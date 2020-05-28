import { getRandomId } from '../utils/';

export class BaseModel {
  id: string;
  createTime: number;
  constructor() {
    this.createTime = new Date().getTime();
    this.id = getRandomId();
  }

  mapperSet(props: string[], value: any) {
    for (const prop of props) {
      if (prop !== '' && this[prop] === undefined) {
        this[prop] = value;
      }
    }
  }
}

