import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonBackButton,
  IonButtons,
  IonSearchbar,
} from '@ionic/angular/standalone';
import { CadastroService, Cadastro } from '../services/cadastro.service';
import { ContaReceber, ReceberService } from '../services/receber.service';

@Component({
  selector: 'app-receber',
  templateUrl: './receber.page.html',
  styleUrls: ['./receber.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonBackButton,
    IonButtons,
    IonSearchbar,
    CommonModule,
    FormsModule,
  ],
})
export class ReceberPage {
  conta = {
    cliente: '',
    vencimento: '',
    pagamento: '',
    valor: null as number | null
  };

  termoBuscaCliente = '';

  readonly clientesCadastrados = computed(() =>
    this.cadastroService
      .listaCadastros()
      .filter((c) => c.tipo.trim().toUpperCase() === 'C'),
  );

  constructor(
    readonly cadastroService: CadastroService,
    readonly receberService: ReceberService,
  ) {}

  clientesFiltrados(): Cadastro[] {
    const termo = this.termoBuscaCliente.trim().toLowerCase();
    if (!termo) {
      return [];
    }
    return this.clientesCadastrados().filter(
      (c) =>
        c.nome.toLowerCase().includes(termo) ||
        c.endereco.toLowerCase().includes(termo),
    );
  }

  selecionarCliente(c: Cadastro): void {
    this.conta.cliente = c.nome;
    this.termoBuscaCliente = '';
  }

  limparClienteSelecionado(): void {
    this.conta.cliente = '';
  }

  cadastrar() {
    const { cliente, vencimento, pagamento, valor } = this.conta;

    if (!cliente.trim() || !vencimento || !pagamento || valor === null || valor <= 0) {
      alert('Preencha todos os campos corretamente!');
      return;
    }

    this.receberService.adicionar({ ...this.conta } as ContaReceber);
    this.limparFormulario();
  }

  excluir(index: number): void {
    this.receberService.excluir(index);
  }

  limparFormulario() {
    this.termoBuscaCliente = '';
    this.conta = {
      cliente: '',
      vencimento: '',
      pagamento: '',
      valor: null
    };
  }
}
