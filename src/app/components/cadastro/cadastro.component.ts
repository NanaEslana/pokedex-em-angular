import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.sass'
})
export class CadastroComponent implements OnChanges {
  @Input() pokemon: any = undefined;

  nome = new FormControl('');
  descricao = new FormControl('');
  tipo = new FormControl('');
  imagem = new FormControl('');

  constructor(private pokemonService: PokemonService) {}

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['pokemon']) {
      if (changes['pokemon'].currentValue) {
        this.nome.setValue(changes['pokemon'].currentValue.nome)
        this.descricao.setValue(changes['pokemon'].currentValue.descricao)
        this.tipo.setValue(changes['pokemon'].currentValue.tipo)
        this.imagem.setValue(changes['pokemon'].currentValue.imagem)

      } else {
        this.nome.reset()
      }
    }
  }

  async save() {
    if (this.pokemon) {
      this.pokemonService.update(this.pokemon.id, {
        nome: this.nome.value,
        descricao: this.descricao.value,
        tipo: this.tipo.value,
        imagem: this.imagem.value

      })
    } else {
      await firstValueFrom(this.pokemonService.create( {
        nome: this.nome.value,
        descricao: this.descricao.value,
        tipo: this.tipo.value,
        imagem: this.imagem.value
      }))
    }

    this.pokemon = undefined;
  }
}
