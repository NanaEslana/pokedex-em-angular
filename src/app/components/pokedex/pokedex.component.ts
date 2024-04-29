import { Component } from '@angular/core';
import {GalleriaModule} from "primeng/galleria";
import {SharedModule} from "primeng/api";
import {PokedexService} from '../../services/pokedex/pokedex.service';

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
  pokedex: any[] = [];
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
  constructor(private pokedexServices: PokedexService) {}
  ngOnInit() {
    this.pokedexServices.list().subscribe((pokedex) => {
      this.pokedex = pokedex;
    });
  }

}
