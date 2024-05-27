import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AutocompleteComponent } from "./components/autocomplete/autocomplete.component";
import { CardsComponent } from "./components/cards/cards.component";
import { GridlistComponent } from "./components/gridlist/gridlist.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, AutocompleteComponent, CardsComponent, GridlistComponent]
})
export class AppComponent {
  title = 'angularmaterial';

}
