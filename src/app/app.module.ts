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

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    MaterialModule
  ],
  declarations: [AppComponent, HelloComponent, UsersComponent, UserComponent],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
