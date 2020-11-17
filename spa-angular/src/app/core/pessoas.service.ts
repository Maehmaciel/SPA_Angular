import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../shared/models/pessoa';

const url = 'http://localhost:3000/pessoas/';

@Injectable({
  providedIn: 'root',
})
export class PessoasService {
  pessoas: Pessoa[] = [];

  constructor(private http: HttpClient) {}

  salvar(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(url, pessoa);
  }

  listar(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(url);
  }
}
