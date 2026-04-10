# Roteiro de Exercício: App Financeiro

Este roteiro guiará a construção do aplicativo `app-financeiro`, um exercício prático para aplicar conceitos de navegação, formulários e manipulação de listas no Ionic/Angular.

## Objetivo do Exercício
- Criar um fluxo completo de navegação (Login -> Menu -> Funcionalidades).
- Implementar formulários simples com vinculação de dados (`ngModel`).
- Gerenciar listagens temporárias em memória (Arrays).
- Reutilizar padrões de lógica vistos no módulo `cadastro-usuario`.


## Passo 1: Iniciar o Projeto
Abra o terminal na sua pasta de projetos e execute:
```bash
# Cria um novo projeto Ionic em branco
ionic start app-financeiro blank --type=angular --capacitor
```
*Dica: Escolha "NgModules" ou "Standalone" conforme a orientação do professor.*

## Passo 2: Gerar as Páginas Necessárias
Dentro da pasta do projeto (`cd app-financeiro`), gere as 5 páginas do exercício:
```bash
ionic generate page login
ionic generate page menu
ionic generate page cadastro
ionic generate page pagar
ionic generate page receber
```

## Passo 3: Configurar as Rotas (`app.routes.ts` ou `app-routing.module.ts`)
Defina os caminhos para cada tela. A rota padrão (`path: ''`) deve redirecionar para `login`.


## Passo 4: Implementar as Telas

### 1. Tela de Login (`login`)
- **HTML**: Crie campos para `Nome` e `Senha`. Adicione um botão "Avançar".
- **TS**: Crie uma função `avancar()` que use o `Router` para navegar para a rota `/menu`.

### 2. Tela de Menu (`menu`)
- **HTML**: Crie 3 botões grandes: "Cadastro", "Contas a Receber" e "Contas a Pagar".
- **TS**: Cada botão deve chamar uma função de navegação para sua respectiva rota.


### 3. Tela de Cadastro (`cadastro`)
- **Campos**: Nome, Tipo (F/C - usar placeholder informativo) e Endereço.
- **Lógica**: 
  - Criar um array `listaCadastros: any[] = [];`.
  - Função `cadastrar()`: Adiciona os dados ao início do array (`unshift`).
  - Função `excluir(index)`: Remove o item pelo índice (`splice`).
  - Função `limparFormulario()`: Reseta os campos após o cadastro.


### 4. Telas Financeiras (`pagar` e `receber`)
- **Pagar**: Campos para Fornecedor, Vencimento, Pagamento e Valor.
- **Receber**: Campos para Cliente, Vencimento, Pagamento e Valor.
- **Lógica**: Repetir o padrão de lista e exclusão usado na tela de Cadastro.


## Passo 5: Pontos de Atenção (Padrões `cadastro-usuario`)
Para que o exercício seja considerado correto, aplique os seguintes conceitos:
- **Two-Way Data Binding**: Use `[(ngModel)]` para ligar os inputs às variáveis do TS.
- **Listas Dinâmicas**: Use `*ngFor` para exibir os itens cadastrados em `ion-item` dentro de um `ion-list`.
- **Feedback Visual**: Use cores diferentes nas toolbars (`primary`, `secondary`, `success`, `warning`) para diferenciar as telas.
- **Botão Voltar**: Use `ion-back-button` nas telas internas para permitir o retorno ao Menu.


## Como Executar e Testar
1. No terminal, rode `ionic serve`.
2. Teste o fluxo: Login -> Menu -> Cadastro -> Voltar -> Receber -> Voltar -> Pagar.
3. Verifique se os itens são adicionados à lista e se o botão "Excluir" funciona corretamente.
