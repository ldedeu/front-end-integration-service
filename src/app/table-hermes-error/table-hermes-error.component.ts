import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import { AfterViewInit, ViewChild } from '@angular/core';
import { HermesService } from '../services/hermes.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import * as $ from 'jquery';
import { Hermes } from '../models/hermes.model';

@Component({
  selector: 'app-table-hermes-error',
  templateUrl: './table-hermes-error.component.html',
  styleUrls: ['./table-hermes-error.component.scss']
})

export class TableHermesErrorComponent implements OnInit {
  displayedColumns: string[] = ['select', 'source_id'];
  dataSource = new MatTableDataSource < Hermes > ();
  selection = new SelectionModel<Hermes>(false, []);
  client_payload = "";
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private hermesService: HermesService) {}
  ngOnInit(): void {
    this.getErrors()
  }

  getErrors() {
    this.hermesService.getErrors().subscribe(response => {
      this.dataSource = new MatTableDataSource<any>(response)
      this.dataSource.paginator = this.paginator;
    })
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }
  
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  selected(row:any){
    this.client_payload="";
    this.hermesService.getBySourceId(row.source_id).subscribe(response => {
      this.client_payload = response;
    })
  }
}
