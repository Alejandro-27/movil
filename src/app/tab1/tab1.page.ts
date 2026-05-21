import { Component, OnInit, inject, Renderer2, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, 
  IonButtons, IonCard, IonAvatar, IonBadge, IonGrid, IonRow, IonCol, IonFab, IonFabButton
} from '@ionic/angular/standalone';
import { MercadoService } from '../services/mercado.services';
import { Activo } from '../interfaces/activo.interfaces';
import { addIcons } from 'ionicons';
// Cambiado sunOutline por sunnyOutline 👇
import { refreshCircleOutline, star, starOutline, sunnyOutline, moonOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, 
    IonButtons, IonCard, IonAvatar, IonBadge, IonGrid, IonRow, IonCol, IonFab, IonFabButton
  ]
})
export class Tab1Page implements OnInit {
  private mercadoService = inject(MercadoService);
  private renderer = inject(Renderer2);
  private el = inject(ElementRef);

  listaActivos: Activo[] = [];
  darkMode: boolean = true; 

  constructor() {
    // Registrado correctamente aquí 👇
    addIcons({ refreshCircleOutline, star, starOutline, sunnyOutline, moonOutline });
  }

  ngOnInit() {
    this.consultarAPI();
  }

  consultarAPI() {
    this.mercadoService.getActivos().subscribe({
      next: (datos: Activo[]) => {
        this.listaActivos = datos;
      },
      error: (err: unknown) => {
        console.error('Error cargando activos:', err);
      }
    });
  }

  alternarFavorito(id: string) {
    this.mercadoService.toggleFavorito(id);
    this.listaActivos = this.listaActivos.map(crypto => {
      if (crypto.id === id) {
        return { ...crypto, isFavorite: !crypto.isFavorite };
      }
      return crypto;
    });
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
    if (!this.darkMode) {
      this.renderer.addClass(this.el.nativeElement, 'light-theme');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'light-theme');
    }
  }
}