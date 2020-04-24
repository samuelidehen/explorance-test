import { Component, OnInit } from "@angular/core";
import { UserService } from "../../../shared/user.service";
import { NotificationService } from "../../../shared/notification.service";
import { MatDialogRef } from "@angular/material";
@Component({
  selector: "user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  constructor(
    public service: UserService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<UserComponent>
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
      if (!this.service.form.get("$key").value)
        this.service.insertUser(this.service.form.value);
      else this.service.updateUser(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success(":: Submitted successfully");
      this.onClose();
    }
  }
  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
}
