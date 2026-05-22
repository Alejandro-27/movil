import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, 
  IonHeader, IonToolbar, IonTitle, IonButtons, IonButton 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { wallet, walletOutline, cash, cashOutline, moon, sunny } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [
    CommonModule, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel,
    IonHeader, IonToolbar, IonTitle, IonButtons, IonButton
  ]
})
export class TabsPage implements OnInit {
  darkMode: boolean = false;

  constructor() {
    // Registramos los iconos nativos que vamos a usar en la app
    addIcons({ wallet, walletOutline, cash, cashOutline, moon, sunny });
  }

  ngOnInit() {
    // Comprobar si el usuario ya tenía una preferencia guardada en el sistema
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersDark.matches;
    this.toggleTheme(this.darkMode);
  }

  // Añade o quita la clase '.dark' a toda la app de Ionic
  toggleTheme(shouldAdd: boolean) {
    this.darkMode = shouldAdd;
    document.body.classList.toggle('dark', shouldAdd);
  }
}