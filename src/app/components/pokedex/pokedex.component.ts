import { Component } from '@angular/core';
import {GalleriaModule} from "primeng/galleria";
import {SharedModule} from "primeng/api";

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [
    GalleriaModule,
    SharedModule
  ],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.sass'
})
export class PokedexComponent {

}
