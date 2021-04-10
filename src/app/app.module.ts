import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: LoginComponent },
      { path: "home", component: HomeComponent }
    ])
  ],
  declarations: [AppComponent, HelloComponent, LoginComponent, HomeComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
