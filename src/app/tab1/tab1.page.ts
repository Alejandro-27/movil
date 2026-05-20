import { Component } from "@angular/core";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonCheckbox,
} from "@ionic/angular/standalone";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    CommonModule,
    IonList,
    IonItem,
    IonLabel,
    IonCheckbox,
  ],
})
export class Tab1Page {
  tareas = [
    { nombre: "Configurar pnpm en Debian Trixie", completada: true },
    { nombre: "Levantar el servidor con ionic serve", completada: true },
    { nombre: "Aprender directivas Standalone", completada: false },
    { nombre: "Compilar el APK final", completada: false },
  ];
  constructor() {}

  cambiarEstado(index: number) {
    this.tareas[index].completada = !this.tareas[index].completada;
  }
}
