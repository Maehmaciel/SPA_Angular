import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
  OnChanges,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Pessoa } from '../shared/models/pessoa';

@Component({
  selector: 'spa-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnChanges, OnInit, AfterViewInit {
  @Input() item: Pessoa[];
  displayedColumns: string[] = ['id', 'nome', 'idade'];

  dataSource: MatTableDataSource<Pessoa>;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Pessoa>();

    this.dataSource = new MatTableDataSource(this.item);
    this.dataSource.sort = this.sort;
  }
  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource(this.item);
    this.dataSource.sort = this.sort;
  }
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
