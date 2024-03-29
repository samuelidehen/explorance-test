import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./material/material.module";
import { AppComponent } from "./app.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { UsersComponent } from "./components/users/users.component";
import { UserComponent } from "./components/users/user/user.component";
import { UserService } from "./shared/user.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
import { MatDialogRef } from "@angular/material";
import { DatePipe } from "@angular/common";
import { UserListComponent } from "./components/users/user-list/user-list.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    MaterialModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firbaseConfig)
  ],
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserListComponent
  ],
  providers: [
    UserService,
    DatePipe,
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [UserComponent]
})
export class AppModule {}
