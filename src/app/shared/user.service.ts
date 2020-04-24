import { Injectable } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { DatePipe } from "@angular/common";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(
    private firebase: AngularFireDatabase,
    private datePipe: DatePipe
  ) {}
  userList: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(""),
    name: new FormControl("", Validators.required),
    family: new FormControl("", Validators.required),
    birthdate: new FormControl(""),
    item: new FormControl(0)
  });
  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      name: "",
      family: "",
      item: 0,
      birthdate: ""
    });
  }
  getUsers() {
    this.userList = this.firebase.list("user");
    return this.userList.snapshotChanges();
  }
  insertUser(user) {
    this.userList.push({
      name: user.name,
      family: user.family,
      item: user.item,
      birthdate:
        user.birthdate == ""
          ? ""
          : this.datePipe.transform(user.birthdate, "yyyy-MM-dd")
    });
  }

  updateUser(user) {
    this.userList.update(user.$key, {
      name: user.name,
      family: user.family,
      item: user.item,
      birthdate:
        user.birthdate == ""
          ? ""
          : this.datePipe.transform(user.birthdate, "yyyy-MM-dd")
    });
  }

  deleteUser($key: string) {
    this.userList.remove($key);
  }
}
