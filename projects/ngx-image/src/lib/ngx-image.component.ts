import {
  Component,
  OnInit,
  Input,
} from '@angular/core';

export type LoadState = 'loading' | 'success' | 'error';

export type NgxImageProps = keyof HTMLImageElement;

@Component({
  selector: 'ngx-image',
  templateUrl: './ngx-image.html',
  styleUrls: ['./style.css'],
})
export class NgxImageComponent implements OnInit {
  @Input() props: NgxImageProps;
  @Input() src: string;
  @Input() alt: string;
  get isWebp() {
    const arr = this.src.split('.');
    return arr[arr.length - 1] === 'webp';
  }
  loadState: LoadState = 'loading';
  constructor() {}

  ngOnInit(): void { }

  loadError(e: Event) {
    this.loadState = 'error';
  }

  load(e: Event) {
    this.loadState = 'success';
  }
}
