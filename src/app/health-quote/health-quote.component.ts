import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-quote',
  templateUrl: './health-quote.component.html',
  styleUrls: ['./health-quote.component.css']
})
export class HealthQuoteComponent implements OnInit {

  /*Values we need to collect either from user or derived from user 

  DOB
  aptc_eligible??
  has_mec????
  utilizationlevel?
  Age <- calc from DOB
  income? <- seems required by the api
  isParent
  Weight?
  Height?
  Gender
  Uses Tobacco
  Zip <- get from prev component
  State <- derive from zip 
  Current Year <- just calc it

  */
  

  constructor() { }

  ngOnInit() {
  }

}