import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Activo } from '../interfaces/activo.interfaces';

@Injectable({ providedIn: 'root' })
export class MercadoService {
  private http = inject(HttpClient);
  private apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1';
  private favoritosIds: string[] = [];

  getActivos(): Observable<Activo[]> {
    return this.http.get<Activo[]>(this.apiUrl).pipe(
      map(criptos => criptos.map(c => ({
        ...c,
        esFavorito: this.favoritosIds.includes(c.id)
      })))
    );
  }

  toggleFavorito(id: string): void {
    this.favoritosIds.includes(id) 
      ? this.favoritosIds = this.favoritosIds.filter(f => f !== id)
      : this.favoritosIds.push(id);
  }
}