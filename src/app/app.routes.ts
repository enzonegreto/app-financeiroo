import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then((p) => p.LoginPage),
  },
  {
    path: 'menu',
    loadComponent: () => import('./menu/menu.page').then((p) => p.MenuPage),
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./cadastro/cadastro.page').then((p) => p.CadastroPage),
  },
  {
    path: 'lista-cadastros',
    loadComponent: () =>
      import('./lista-cadastros/lista-cadastros.page').then((p) => p.ListaCadastrosPage), 
  },
  {
    path: 'pagar',
    loadComponent: () => import('./pagar/pagar.page').then((p) => p.PagarPage),
  },
  {
    path: 'receber',
    loadComponent: () => import('./receber/receber.page').then((p) => p.ReceberPage),
  },
];
