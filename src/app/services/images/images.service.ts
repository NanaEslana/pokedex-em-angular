import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private httpClient: HttpClient) {}


  list() {
    return this.httpClient.get<any[]>('http://localhost:3000/images');
  }

}
