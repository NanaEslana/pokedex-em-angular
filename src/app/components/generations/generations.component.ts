import { Component } from '@angular/core';
import {AccordionModule} from "primeng/accordion";

@Component({
  selector: 'app-generations',
  standalone: true,
  imports: [
    AccordionModule
  ],
  templateUrl: './generations.component.html',
  styleUrl: './generations.component.sass'
})
export class GenerationsComponent {

}
