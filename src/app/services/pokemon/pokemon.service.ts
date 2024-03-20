import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }


  create(body: any) {
    return this.httpClient.post<any>('http://localhost:3000/pokemons', body);
  }

  list() {
    return this.httpClient.get<any[]>('http://localhost:3000/pokemons');
  }

  one(id: string) {
    return this.httpClient.get<any>('http://localhost:3000/pokemons/'+id);
  }

  update(id: string, body: any) {
    return this.httpClient.patch<any>('http://localhost:3000/pokemons/'+id, body);
  }

  delete(id: string) {
    return this.httpClient.delete<any>('http://localhost:3000/pokemons'+id);
  }
}
