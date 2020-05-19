import {
  Component,
  OnInit,
  Input,
} from '@angular/core';
import { LoadState } from './state';

@Component({
  selector: 'ngx-image',
  template: `
    <div class="ngx-div">
      <img
        class="ngx-img"
        [src]="src"
        [alt]="alt ? alt : ''"
        (error)="loadError($event)"
        (load)="load($event)"
      />
      <div class="ngx-load" *ngIf="loadState !== 'success'">
        <span *ngIf="loadState === 'loading'">加载中...</span>
        <span *ngIf="loadState === 'error'">加载失败</span>
      </div>
    </div>
  `,
  styleUrls: ['./style.css'],
})
export class NgxImageComponent implements OnInit {
  @Input() src: string;
  @Input() alt: string;

  loadState: LoadState = 'loading';
  constructor() { }

  ngOnInit(): void { }

  loadError(e: Event) {
    this.loadState = 'error';
  }

  load(e: Event) {
    this.loadState = 'success';
  }
}
