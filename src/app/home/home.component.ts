import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  insuranceType: string = "";
  zipcode: number = 0;
  noQuoteErrorText: string = "";
  wrongZipError: string = "";
  zipResults: Object;

  constructor(private _http: HttpService) {}

  ngOnInit() {}

  setHealth() {
    this.insuranceType = "health";
    this.noQuoteErrorText = "";
  }

  setAuto() {
    this.insuranceType = "auto";
    this.noQuoteErrorText = "";
  }

  setHealthAndAuto() {
    this.insuranceType = "health-and-auto";
    this.noQuoteErrorText = "";
  }

  zipModified() {
    console.log("zip modified");
    if (this.validateZip(this.zipcode) == true) {
      this.wrongZipError = "";
    }
  }

  getInsuranceQuote() {
    this.noQuoteErrorText = "";
    this.wrongZipError = "";

    if (this.insuranceType != "" && this.validateZip(this.zipcode) != false) {
      console.log("zip : " + this.zipcode + " path: " + this.insuranceType);
      this.zipResults = this._http.getZip(this.zipcode);
      console.log(this.zipResults);
    } else {
      if (this.insuranceType == "") {
        this.noQuoteErrorText = "*Select Insurance Type";
      }
      if (this.validateZip(this.zipcode) == false) {
        this.wrongZipError = "Enter a valid zip code (exactly 5 digits long)";
      }
    }
  }

  validateZip(zipcode: number): boolean {
    return zipcode.toString().length == 5;
  }
}
