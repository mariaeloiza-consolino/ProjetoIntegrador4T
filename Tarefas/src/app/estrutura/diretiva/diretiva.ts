import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})
export class Diretiva {

  listaItens = [
    {ID: 1, Nome: 'Gabriel', Ativo: true},
    {ID: 2, Nome: 'Luiz', Ativo: false},
    {ID: 3, Nome: 'Maria', Ativo: true},
    {ID: 4, Nome: 'Volpe', Ativo: false},
    {ID: 5, Nome: 'Popo', Ativo: true},
  ];

  mostrarMensagem = true;
  toggleMensagem() {
   this.mostrarMensagem = !this.mostrarMensagem;
  }
}
