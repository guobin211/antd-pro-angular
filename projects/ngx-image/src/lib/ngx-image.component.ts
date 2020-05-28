import {
  Component,
  OnInit,
  Input,
} from '@angular/core';

export type LoadState = 'loading' | 'success' | 'error';

@Component({
  selector: 'ngx-image',
  templateUrl: './ngx-image.html',
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
