import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { PokemonService } from './services/pokemon/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import {PokedexComponent} from "./components/pokedex/pokedex.component";
import {GenerationsComponent} from "./components/generations/generations.component";
import {PokedexService} from "./services/pokedex/pokedex.service";
import {ScrollTopModule} from "primeng/scrolltop";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentsModule, HttpClientModule, PokedexComponent, GenerationsComponent, ScrollTopModule],
  providers:[PokemonService, PokedexService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'pokedex-em-angular';
  pokemon: any = null;
}
