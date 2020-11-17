import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../core/pessoas.service';
import { Pessoa } from '../shared/models/pessoa';
import { Mensagem } from '../shared/models/mensagem';
@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pessoas: Pessoa[] = [];
  error: boolean = false;
  mensagem: Mensagem = {
    texto: null,
    tipo: null,
    titulo: null,
  };
  constructor(private pessoasService: PessoasService) {}

  ngOnInit(): void {
    this.getDados();
  }
  reciverFeedback(respostaFilho) {
    if (respostaFilho) this.getDados();
  }
  getDados() {
    this.pessoasService.listar().subscribe(
      (pessoas) => {
        this.pessoas = pessoas;
        this.mensagem = {
          texto: 'Há ' + this.pessoas.length + ' pessoas cadastradas',
          tipo: 'info',
          titulo: '',
        };
      },
      () => {
        this.error = true;
        this.mensagem = {
          texto: 'não foi possível buscar os dados',
          tipo: 'danger',
          titulo: 'Erro',
        };
      }
    );
  }
}
