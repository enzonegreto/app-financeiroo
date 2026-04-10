/**
 * Tela só de leitura/edição da lista: mostra os mesmos dados gravados pelo `CadastroService`
 * na página de cadastro. Mesma instância do serviço → mesma lista em memória.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonList,
  IonItem,
  IonLabel,
  IonBackButton,
  IonButtons,
} from '@ionic/angular/standalone';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-lista-cadastros',
  templateUrl: './lista-cadastros.page.html',
  styleUrls: ['./lista-cadastros.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonList,
    IonItem,
    IonLabel,
    IonBackButton,
    IonButtons,
    CommonModule,
  ],
})
export class ListaCadastrosPage {
  constructor(readonly cadastroService: CadastroService) {}

  excluir(index: number): void {
    this.cadastroService.excluir(index);
  }
}
