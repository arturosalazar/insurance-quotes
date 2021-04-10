import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";

  constructor() {}

  ngOnInit() {}

  //TODO: Update submitForm to handle checks for this form
  submitForm() {
    console.log("Name : " + this.username + " Password: " + this.password);
  }
}
