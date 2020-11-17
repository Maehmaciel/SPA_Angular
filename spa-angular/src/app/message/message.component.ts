import { Component, OnInit, Input } from '@angular/core';
import { Mensagem } from '../shared/models/mensagem';
@Component({
  selector: 'spa-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  @Input() mensagem: Mensagem;

  constructor() {}

  ngOnInit(): void {}
}
