import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'welcome',
        loadComponent: () => import('../pages/welcome/welcome.page').then((m) => m.WelcomePage),
      },
      // Rutas para la segunda pestaña (tab2)
      {
        path: 'tab1',
        loadComponent: () => import('../tab1/tab1.page').then((m) => m.Tab1Page),
      },
      // Rutas para convertir divisas
      {
        path: 'tab2',
        loadComponent: () => import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: '',
        redirectTo: '/tabs/welcome',  
        pathMatch: 'full',
      },
    ],
  },
];