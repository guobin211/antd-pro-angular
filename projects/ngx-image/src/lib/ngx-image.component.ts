import {
  Component,
  Input,
} from "@angular/core";

export type NgxImageProps = keyof HTMLImageElement;

@Component({
  selector: "ngx-image",
  templateUrl: "./ngx-image.html",
  styleUrls: ["./ngx-image.css"],
})
export class NgxImageComponent {
  @Input() props: NgxImageProps;
  @Input() src: string;
  @Input() alt: string;

}
