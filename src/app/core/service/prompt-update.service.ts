import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';


const promptUser = (e: any) => e.toString().length > 50;
/**
 * 强制更新
 */
@Injectable()
export class PromptUpdateService {

  constructor(private updates: SwUpdate) { }

  doUpdate() {
    this.updates.available.subscribe(event => {
      if (promptUser(event)) {
        this.updates.activateUpdate().then(() => document.location.reload());
      }
    });
  }

}
