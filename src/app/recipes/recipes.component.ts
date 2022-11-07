import { Component, OnInit } from '@angular/core';

// * recipes component for the app

// * the command below is used to create a component without the test file
// * ng generate component <component-name> --skip-tests

// * the command below is used when we want to structure the folder by feature
// * the code below is used to create a component inside a folder rather than the
// * app folder
// * ng generate component <parent-component-name or parent-folder-name>/<child-component-name or child-folder-name> --skip-tests

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
