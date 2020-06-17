import { Injectable } from '@angular/core';
import { HttpService } from '../core/service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpService) { }
}
