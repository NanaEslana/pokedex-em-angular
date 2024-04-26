import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { BannerComponent } from './banner/banner.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FooterComponent } from './footer/footer.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { GalleriaModule } from 'primeng/galleria';
import {HttpClientModule} from "@angular/common/http";
import {ImagesService} from "../services/images/images.service";
import {CuriositiesComponent} from "./curiosities/curiosities.component";
import {FieldsetModule} from "primeng/fieldset";
import { FileUploadModule } from 'primeng/fileupload';
import {ToastModule} from "primeng/toast";
import {AboutComponent} from "./about/about.component";
import {MessageService} from "primeng/api";
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  declarations: [
    TopbarComponent,
    BannerComponent,
    CadastroComponent,
    FooterComponent,
    PokemonListComponent,
    PokemonComponent,
    CuriositiesComponent,
    AboutComponent,

  ],
  exports: [
    TopbarComponent,
    BannerComponent,
    CadastroComponent,
    FooterComponent,
    PokemonListComponent,
    CuriositiesComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MenubarModule,
    GalleriaModule,
    HttpClientModule,
    FieldsetModule,
    FileUploadModule,
    ToastModule,
    DropdownModule,
    FormsModule,
    EditorModule,
    InputTextModule,
  ],
  providers: [ImagesService, MessageService]
})
export class ComponentsModule { }
