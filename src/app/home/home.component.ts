import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  insuranceType: string = "";
  zipcode: number;

  constructor() {}

  ngOnInit() {}

  setHealth() {
    this.insuranceType = "health";
  }

  setAuto() {
    this.insuranceType = "auto";
  }

  setHealthAndAuto() {
    this.insuranceType = "health-and-auto";
  }

  getInsuranceQuote() {
    console.log("zip : " + this.zipcode + " path: " + this.insuranceType);
  }
}
