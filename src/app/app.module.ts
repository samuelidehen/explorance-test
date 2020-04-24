import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./material/material.module";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { UsersComponent } from "./components/users/users.component";
import { UserComponent } from "./components/users/user/user.component";
import { UserService } from "./shared/user.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { MatDialogRef } from "@angular/material";
import { DatePipe } from "@angular/common";
import { UserListComponent } from "./components/users/user-list/user-list.component";
const firbaseConfig = {
  firbaseConfig: {
    apiKey: "AIzaSyCcTdEITJdh7bRtbExESU3IboGLjozYvgI",
    authDomain: "explorance-form.firebaseapp.com",
    databaseURL: "https://explorance-form.firebaseio.com",
    projectId: "explorance-form",
    storageBucket: "explorance-form.appspot.com",
    messagingSenderId: "815802272792",
    appId: "1:815802272792:web:4dca7dc5f2c0b86a3a876d"
  }
};
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    MaterialModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firbaseConfig.firbaseConfig)
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    UsersComponent,
    UserComponent,
    UserListComponent
  ],
  providers: [
    UserService,
    DatePipe,
    {
      provide: MatDialogRef,
      useValue: {
        close: (dialogResult: any) => {}
      }
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [UserComponent]
})
export class AppModule {}
