import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { HttpService } from "./http.service";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { HealthQuoteComponent } from "./health-quote/health-quote.component";
import { AutoQuoteComponent } from "./auto-quote/auto-quote.component";
import { HealthAndAutoComponent } from "./health-and-auto/health-and-auto.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: LoginComponent },
      { path: "home", component: HomeComponent },
      { path: "health", component: HealthQuoteComponent },
      { path: "auto", component: AutoQuoteComponent },
      { path: "health-and-auto", component: HealthAndAutoComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    HomeComponent,
    HealthQuoteComponent,
    AutoQuoteComponent,
    HealthAndAutoComponent
  ],
  providers: [HttpService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
