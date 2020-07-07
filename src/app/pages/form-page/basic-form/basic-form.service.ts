import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class BasicFormModel {
  constructor(public name = "", public password = "") {}
}

@Injectable({
  providedIn: "root"
})
export class BasicFormService {
  initialValue = new BasicFormModel();

  constructor(private _fb: FormBuilder) { }

  save(value: any) {
    Object.assign(this.initialValue, value);
  }

  initFormGroup(): FormGroup {
    return this._fb.group(
      {
        name: [
          this.initialValue.name,
          [Validators.required]
        ],
        password: [
          this.initialValue.password,
          [Validators.required, Validators.minLength(6)]
        ]
      }
    );
  }

  postForm(value: BasicFormModel) {
    // fetch api
    console.info("postForm:", value);
    this.initialValue = new BasicFormModel();
  }
}
