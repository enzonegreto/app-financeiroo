import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { CadastroService } from '../services/cadastro.service';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonBackButton, IonButtons, CommonModule, FormsModule, RouterLink]

})

export class CadastroPage {

  entidade = {
    nome: '',
    tipo: '',
    endereco: ''
  };

  constructor(readonly cadastroService: CadastroService) {}

  cadastrar() {
    const { nome, tipo, endereco } = this.entidade;
    if (!nome.trim() || !tipo.trim() || !endereco.trim()) {
      alert('Preencha todos os campos!');
      return;
    }
    this.cadastroService.adicionar({ ...this.entidade });
    this.limparFormulario();
  }

  limparFormulario() {
    this.entidade = {
      nome: '',
      tipo: '',
      endereco: ''
    };
  }
}

