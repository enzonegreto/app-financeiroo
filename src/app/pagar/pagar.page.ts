import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonBackButton, IonButtons } from '@ionic/angular/standalone';

interface ContaPagar {
  fornecedor: string;
  vencimento: string;
  pagamento: string;
  valor: number;
}

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.page.html',
  styleUrls: ['./pagar.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonBackButton, IonButtons, CommonModule, FormsModule]
})
export class PagarPage {
  conta = {
    fornecedor: '',
    vencimento: '',
    pagamento: '',
    valor: null as number | null
  };

  contasPagar: ContaPagar[] = [];

  cadastrar() {
    const { fornecedor, vencimento, pagamento, valor } = this.conta;

    if (!fornecedor.trim() || !vencimento || !pagamento || valor === null || valor <= 0) {
      alert('Preencha todos os campos corretamente!');
      return;
    }

    this.contasPagar.unshift({ ...this.conta } as ContaPagar);
    this.limparFormulario();
  }

  excluir(index: number) {
    this.contasPagar.splice(index, 1);
  }

  limparFormulario() {
    this.conta = {
      fornecedor: '',
      vencimento: '',
      pagamento: '',
      valor: null
    };
  }
}
