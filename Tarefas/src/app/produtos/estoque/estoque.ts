import { Component } from '@angular/core';

@Component({
  selector: 'app-estoque',
  standalone: false,
  templateUrl: './estoque.html',
  styleUrl: './estoque.css'
})
export class Estoque {

  produtos = [
    {Nome: 'Notebook', Preco:4000, Estoque: 3},
    {Nome: 'Teclado', Preco: 300, Estoque: 0},
    {Nome: 'Mouse', Preco: 150, Estoque: 20},
    {Nome: 'Monitor', Preco: 2200, Estoque: 0}
  ];

  aumentarPreco(){
    // percorre todos os produtos do array
    this.produtos = this.produtos.map(
      //copia todas as propiedades do produto original e sobrescreve Preco com um novo valor
      produto => ({...produto,
      //calculo para fazer o aumento = primeiro faz o aumento, depois converte esse numero para uma string com duas casas decimais e depois coverte de volta para numero
      Preco: +(produto.Preco * 1.1).toFixed(2)
    }));
  }

  diminuirPreco(){
    // percorre todos os produtos do array
    this.produtos = this.produtos.map(
      //copia todas as propiedades do produto original e sobrescreve Preco com um novo valor
      produto => ({ ...produto,
       //calculo para fazer o desconto = primeiro faz o desconto, depois converte esse numero para uma string com duas casas decimais e depois coverte de volta para numero
      Preco: +(produto.Preco * 0.9).toFixed(2)
    }));
  }

}
