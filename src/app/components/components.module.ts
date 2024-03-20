import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { BannerComponent } from './banner/banner.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FooterComponent } from './footer/footer.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';



@NgModule({
  declarations: [
    TopbarComponent, 
    BannerComponent,
    CadastroComponent,
    FooterComponent,
    PokemonListComponent,
    PokemonComponent,
  ],
    
  exports: [
    TopbarComponent,
    BannerComponent,
    CadastroComponent,
    FooterComponent,
    PokemonListComponent],

  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
