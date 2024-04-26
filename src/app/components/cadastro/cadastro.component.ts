import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { firstValueFrom } from 'rxjs';
import {UploadEvent} from "primeng/fileupload";
import {MessageService} from "primeng/api";
import {FileUploadEvent} from "primeng/fileupload/fileupload.interface";


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
    description: ['', [Validators.required]],
    tipo: ['', [Validators.required]],
    image: ['', [Validators.required]],
  })

  constructor(private pokemonService: PokemonService, private messageService: MessageService, private readonly formBuild: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['pokemon']) {
      if (changes['pokemon'].currentValue) {
        this.form.patchValue(changes['pokemon'].currentValue)
      } else {
        this.form.reset()
      }
    }
  }

  text: string | undefined;

  types: Type[] | undefined;

  ngOnInit() {
    this.types = [
      { name: 'Normal. (normal)' , value: 'normal'},
      { name: 'Fire (fogo/fire)', value: 'fire'},
      { name: 'Water (água)', value: 'water'},
      { name: 'Grass (grama)' , value: 'grass'},
      { name: 'Flying (voador)', value: 'flying'},
      { name: 'Fighting (lutador)', value: 'fighting'},
      { name: 'Poison (veneno)', value: 'poison'},
      { name: 'Electric (elétrico)', value: 'electric'},
    ];
  }

  async onUpload(event: FileUploadEvent) {
    this.form.patchValue({
      image: await this.getBase64(event.files[0])
    })
    this.messageService.add({ severity: 'info', summary: 'Enviada', detail: 'Imagem enviada com sucesso!' });
  }

  async getBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
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
