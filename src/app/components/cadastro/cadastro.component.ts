import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { firstValueFrom } from 'rxjs';
import {UploadEvent} from "primeng/fileupload";
import {MessageService} from "primeng/api";


interface Type {
  name: string;
  value: string;
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.sass'
})
export class CadastroComponent implements OnChanges {
  @Input() pokemon: any = undefined;

  form = this.formBuild.group({
    id: [],
    nome: ['', [Validators.required]],
    descricao: ['', [Validators.required]],
    tipo: ['', [Validators.required]],
    imagem: ['', [Validators.required]],
  })

  constructor(private pokemonService: PokemonService, private messageService: MessageService, private readonly formBuild: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['pokemon']) {
      if (changes['pokemon'].currentValue) {
        console.log(changes['pokemon'].currentValue);
        this.form.patchValue(changes['pokemon'].currentValue)
      } else {
        this.form.reset()
      }
    }
  }

  text: string | undefined;

  types: Type[] | undefined;
  selectedCity: Type | undefined;

  ngOnInit() {
    this.types = [
      { name: 'Normal.' , value: 'normal'},
      { name: 'Fire (fogo)', value: 'fire'},
      { name: 'Water (água)', value: 'water'},
      { name: 'Grass (grama)' , value: 'grass'},
      { name: 'Flying (voador)', value: 'flying'},
      { name: 'Fighting (lutador)', value: 'fighting'},
      { name: 'Poison (veneno)', value: 'poison'},
      { name: 'Electric (elétrico)', value: 'electric'},
    ];
  }

  onUpload(event: UploadEvent) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }

  async save() {
    if (this.form.valid) {
      if (this.form.get('id')?.value) {
        await firstValueFrom(this.pokemonService.update(this.form.get('id')?.value!, this.form.getRawValue()))
        this.messageService.add({ severity: 'success', summary: 'Atualizado', detail: 'Pokémon atualizado com sucesso!' });
      } else {
        await firstValueFrom(this.pokemonService.create( this.form.getRawValue()))
        this.messageService.add({ severity: 'success', summary: 'Cadastrado', detail: 'Pokémon cadastrado com sucesso!' });
      }
      this.pokemon = undefined;
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Aviso!', detail: 'Preencha todos os campos' });
    }
  }
}
