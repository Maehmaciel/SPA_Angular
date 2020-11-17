import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PessoasService } from '../core/pessoas.service';
import { Pessoa } from '../shared/models/pessoa';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
@Component({
  selector: 'spa-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  cadastro: FormGroup;

  @Output() respostaFamilia = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    private pessoaService: PessoasService,
    private _snackBar: MatSnackBar
  ) {}

  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: 5 * 1000,
    });
  }
  ngOnInit(): void {
    this.cadastro = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      idade: [
        '',
        [Validators.required, Validators.min(0), Validators.max(150)],
      ],
    });
  }
  reiniciar() {
    this.cadastro.reset();
  }
  salvar(): void {
    this.cadastro.markAllAsTouched();
    if (this.cadastro.invalid) return;
    const pessoa = this.cadastro.getRawValue() as Pessoa;
    this.pessoaService.salvar(pessoa).subscribe(
      () => {
        this.openSnackBar();
        this.respostaFamilia.emit(true);
      },
      () => {
        alert('Epa, houve um erro, tente novamente');
      }
    );
  }
}
