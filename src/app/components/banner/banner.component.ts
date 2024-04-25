import { Component } from '@angular/core';
import {ImagesService} from "../../services/images/images.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.sass'
})
export class BannerComponent {
  images: any[] = [];
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  constructor(private imagesServices: ImagesService) {}

  ngOnInit() {
    this.imagesServices.list().subscribe((images) => {
      this.images = images;
    });
  }
}
