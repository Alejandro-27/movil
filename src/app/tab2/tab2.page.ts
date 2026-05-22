import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonCard, 
  IonCardHeader, IonCardTitle, IonCardContent, IonItem, 
  IonInput, IonRow, IonCol, IonSelect, IonSelectOption,
  IonFab, IonFabButton, IonIcon // <-- AGREGADOS PARA EL FAB
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons'; // <-- AGREGADO PARA REGISTRAR LOS ICONOS
import { sunnyOutline, moonOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, 
    IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, 
    IonItem, IonInput, IonRow, IonCol, IonSelect, IonSelectOption,
    IonFab, IonFabButton, IonIcon // <-- SE INCLUYEN EN LOS IMPORTS DEL COMPONENTE
  ]
})
export class Tab2Page implements OnInit {
  cantidad: number = 1;
  monedaOrigen: string = 'USD';
  monedaDestino: string = 'COP';
  resultado: number = 0;

  // VARIABLES PARA EL MODO OSCURO
  darkMode: boolean = false;

  divisas: string[] = ['USD', 'COP', 'EUR', 'MXN', 'ARS', 'BRL', 'CLP', 'PEN', 'GBP', 'JPY'];
  tasasCambio: any = {};

  constructor(private http: HttpClient) {
    // Registramos los dos iconos para que Ionic los pueda renderizar
    addIcons({ sunnyOutline, moonOutline });
  }

  ngOnInit() {
    this.obtenerTasas();
    
    // Sincronizar el estado inicial del botón con el estado real del body
    this.darkMode = !document.body.classList.contains('light-theme');
  }

  // LA FUNCIÓN DEL BOTÓN QUE CAMBIA EL MODO ABSOLUTO
  toggleTheme() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('light-theme', !this.darkMode);
  }

  obtenerTasas() {
    const url = `https://open.er-api.com/v6/latest/${this.monedaOrigen}`;
    this.http.get(url).subscribe((data: any) => {
      if (data && data.rates) {
        this.tasasCambio = data.rates;
        this.calcularConversion();
      }
    });
  }

  calcularConversion() {
    if (this.tasasCambio && this.tasasCambio[this.monedaDestino]) {
      this.resultado = this.cantidad * this.tasasCambio[this.monedaDestino];
    }
  }

  cambioOrigen() {
    this.obtenerTasas();
  }

  cambioDestino() {
    this.calcularConversion();
  }
}