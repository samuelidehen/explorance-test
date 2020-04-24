import { Component, OnInit } from "@angular/core";
import { UserService } from "../../../shared/user.service";
import { NotificationService } from "../../../shared/notification.service";
@Component({
  selector: "user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  constructor(
    public service: UserService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.service.getUsers();
  }
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
  onSubmit() {
    event.preventDefault();
    if (this.service.form.valid) {
      console.log("submitted");
      this.service.insertUser(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success(":: Submitted successfully");
    }
  }
}
