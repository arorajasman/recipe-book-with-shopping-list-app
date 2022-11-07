import { Component, OnInit } from '@angular/core';

// * header or nav bar component for the app

@Component({
  selector: 'app-header',  // name of the selector for the component
  templateUrl: './header.component.html',  // path to html template URL for the component
  styleUrls: ['./header.component.css']  // array of paths to the css files for styling the component
})
export class HeaderComponent implements OnInit {

  // constructor for the class
  constructor() { }

  // custom-init method for the class
  ngOnInit(): void {
  }

}
