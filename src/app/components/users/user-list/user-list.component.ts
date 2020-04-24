import { Component, OnInit, ViewChild } from "@angular/core";
import {
  MatTableDataSource,
  MatSort,
  MatPaginator,
  MatDialog,
  MatDialogConfig
} from "@angular/material";
import { UserService } from "../../../shared/user.service";
import { UserComponent } from "../user/user.component";
import { NotificationService } from "../../../shared/notification.service";

@Component({
  selector: "user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  constructor(
    private service: UserService,
    private notificationService: NotificationService,
    private dialog: MatDialog
  ) {}
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = [
    "name",
    "family",
    "birthdate",
    "item",
    "actions"
  ];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  ngOnInit() {
    this.service.getUsers().subscribe(list => {
      let array = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });

      this.listData = new MatTableDataSource(array);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
  onEdit(row) {
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(UserComponent, dialogConfig);
  }

  onDelete($key) {
    if (confirm("Are you sure to delete this record ?")) {
      this.service.deleteUser($key);
      this.notificationService.warn("! Deleted successfully");
    }
  }
}
