import { Component, OnInit } from "@angular/core";
import { UserService } from "../../../shared/user.service";
@Component({
  selector: "user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  constructor(public service: UserService) {}

  ngOnInit() {}
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
}
