import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  insuranceType: string = "";
  zipcode: number = 0;

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
    if (this.insuranceType == "") {
      alert("Select Insurance Type");
    }

    let result = this.validateZip(this.zipcode);

    if (result == false) {
      alert("Enter a valid zip code");
    }

    console.log("zip : " + this.zipcode + " path: " + this.insuranceType);
  }

  validateZip(zipcode: number): boolean {
    return zipcode.toString().length == 5;
  }
}
