import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.sass'
})
export class PokemonComponent {
  @Input({required: true}) pokemon: any = null;
  @Output() onClick = new EventEmitter<any>()

  select() {
    this.onClick.emit(this.pokemon)
  }
}
