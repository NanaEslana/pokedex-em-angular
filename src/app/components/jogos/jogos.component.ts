import { Component } from '@angular/core';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-jogos',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule
  ],
  templateUrl: './jogos.component.html',
  styleUrl: './jogos.component.sass'
})
export class JogosComponent {

}
