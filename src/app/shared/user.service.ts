import { Injectable } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor() {}
  form: FormGroup = new FormGroup({
    id: new FormControl(""),
    name: new FormControl("", Validators.required),
    family: new FormControl("", Validators.required),
    birthdate: new FormControl(""),
    item: new FormControl(0)
  });
  initializeFormGroup() {
    this.form.setValue({
      id: null,
      name: "",
      family: "",
      item: 0,
      birthdate: ""
    });
  }
}
