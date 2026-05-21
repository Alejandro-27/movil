import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonContent, IonButton, IonIcon, IonLabel, IonChip } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { statsChart, arrowForwardOutline, flashOutline, shieldCheckmarkOutline } from 'ionicons/icons';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, IonIcon, IonLabel, IonChip, CommonModule, RouterLink]
})
export class WelcomePage {
  constructor() {
    addIcons({ statsChart, arrowForwardOutline, flashOutline, shieldCheckmarkOutline });
  }
}