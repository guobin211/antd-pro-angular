import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { BasicFormService } from "./basic-form.service";
import { Subject } from "rxjs";
import { debounceTime, takeUntil } from "rxjs/operators";

@Component({
  templateUrl: "./basic-form.component.html",
  styleUrls: ["./basic-form.component.scss"]
})
export class BasicFormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  private unsubscribe = new Subject<void>();

  constructor(private _basicFormService: BasicFormService) { }

  ngOnInit(): void {
    this.form = this._basicFormService.initFormGroup();
    this.form.valueChanges.pipe(
      debounceTime(500),
      takeUntil(this.unsubscribe)
    ).subscribe((v) => {
      this._basicFormService.save(v);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }

  onSubmit() {
    if (this.form.valid) {
      this._basicFormService.postForm(this.form.value);
    } else {
      // 校验不通过
      for (const key in this.form.controls) {
        if (this.form.controls.hasOwnProperty(key)) {
          this.form.controls[key].markAsTouched();
          this.form.controls[key].updateValueAndValidity();
        }
      }
    }
  }
}
