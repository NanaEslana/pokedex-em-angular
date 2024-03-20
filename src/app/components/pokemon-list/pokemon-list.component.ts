import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.sass'
})
export class PokemonListComponent implements OnInit {
  pokemons:any[] = [];

  @Output() onSelectPokemon = new EventEmitter<any>();

  constructor(private pokemonService: PokemonService){

  }

  async ngOnInit(): Promise<void> {
    this.pokemons = await firstValueFrom(this.pokemonService.list());
  }

  select(pokemon: any) {
    this.onSelectPokemon.emit(pokemon)
  }

}
