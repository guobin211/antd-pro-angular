import { BaseModel } from './base.model';
import { extend } from '../utils';

export class UserModel extends BaseModel {
  username: string;
  password: string;
  autoLogin: boolean;
  isLogin: boolean;
  phone: string;
  ali: string;
  weibo: string;
  tao: string;
  wx: string;
  navigation?: any;
  permissionLevel?: number;

  constructor() {
    super();
    this.mapperSet(['username', 'password', 'phone', 'ali', 'weibo', 'tao', 'wx'], '');
    this.mapperSet(['autoLogin', 'isLogin'], false);
  }

  static create(username: string): UserModel {
    const user = new UserModel();
    user.username = username;
    user.password = '123456';
    return user;
  }

  static createBy<T>(user: T): T & UserModel {
    return extend(new UserModel(), user);
  }
}
