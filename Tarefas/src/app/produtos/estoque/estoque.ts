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
    {Nome: 'Monitor', Preco: 1200, Estoque: 0}
  ];

  disponibilidade (){
    if (Estoque > 0){
      this.mensagem = "Disponível"

    }
  }

}
