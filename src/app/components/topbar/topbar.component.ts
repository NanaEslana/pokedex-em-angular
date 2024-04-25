import {Component, OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.sass'
})
export class TopbarComponent implements OnInit{
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
      {label: 'BANNER'},
      {label: 'CURIOSIDADE'},
      {label: 'SOBRE'},
      {label: 'CADASTRO'},
      {label: 'POKEMONS'},
    ]
  }
}
