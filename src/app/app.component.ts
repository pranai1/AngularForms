import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  cities =  [
    "hyderabad",
    "delhi",
    "goa",
    "mumbai",
    "banglore",
    "chennai",
    "noida",
    "gurgoan",
    "kochi",
    "pune"
  ];
  states =  [
    "Telangana",
    "Andhra Pradesh",
    "Goa",
    "Kerala",
    "Orissa",
    "Tamil Nadu",
    "Bihar",
    "Uttar Pradesh",
    "Maharastra",
    "Karnataka"
  ];
  languages =  [
    "Telugu",
    "Hindhi",
    "English",
    "Malyalam",
    "Tamil",
    "Bihari"
  ];
}
