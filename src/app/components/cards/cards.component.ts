import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatCardModule, MatButtonModule, CommonModule,MatFormFieldModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  animal = [
    {
      id: 1,
      name: "Tom",
      Breed: "Dog Breed",
      para: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
      img: "https://material.angular.io/assets/img/examples/shiba2.jpg"
    },
    {
      id: 2,
      name: "Max",
      Breed: "Dog Breed",
      para: "lorem epsum dolor co lorem epsum  the Shiba Inu was originally bred for hunting the Shiba Inu was originally bred for hunting  the Shiba Inu was originally bred for hunting",
      img: "https://material.angular.io/assets/img/examples/shiba2.jpg"
    },
    {
      id: 3,
      name: "Helca",
      Breed: "Dog Breed",
      para: "lorem epsum dolor co lorem epsum  the Shiba Inu was originally bred for hunting the Shiba Inu was originally bred for hunting  the Shiba Inu was originally bred for hunting",
      img: "https://material.angular.io/assets/img/examples/shiba2.jpg"
    },
    {
      id: 4,
      name: "luice",
      Breed: "Dog Breed",
      para: "lorem epsum dolor co lorem epsum  the Shiba Inu was originally bred for hunting the Shiba Inu was originally bred for hunting  the Shiba Inu was originally bred for hunting",
      img: "https://material.angular.io/assets/img/examples/shiba2.jpg"
    },
  ]

}
