
import { Injectable, Signal, signal } from '@angular/core';


export interface Cadastro {
  nome: string;
  tipo: string;
  endereco: string;
}

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
 
  private readonly _listaCadastros = signal<Cadastro[]>([]);

  readonly listaCadastros: Signal<Cadastro[]> = this._listaCadastros.asReadonly();

 
  adicionar(entidade: Cadastro): void {
    this._listaCadastros.update((lista) => [{ ...entidade }, ...lista]);
  }

  excluir(index: number): void {
    this._listaCadastros.update((lista) => {
      const proxima = [...lista];
      proxima.splice(index, 1);
      return proxima;
    });
  }
}
