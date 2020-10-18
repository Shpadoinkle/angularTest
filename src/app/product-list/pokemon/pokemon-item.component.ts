import { Component } from "@angular/core";

import { ditto } from "../../products";

@Component({
  selector: "app-pokemon-item",
  templateUrl: "./pokemon-item.component.html",
  styleUrls: ["./pokemon-item.component.scss"],
})
export class PokemonItemComponent {
  ditto = ditto;

  share() {
    window.alert("The product has been shared!");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
