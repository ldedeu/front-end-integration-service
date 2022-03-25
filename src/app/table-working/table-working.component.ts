import { MiddlewareService } from './../services/middleware.service';
import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Middleware } from '../models/middleware.model';
import * as $ from 'jquery';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-table-working',
  templateUrl: './table-working.component.html',
  styleUrls: ['./table-working.component.scss']
})

export class TableWorkingComponent implements OnInit {
  displayedColumns: string[] = ['select','id', 'sent', 'validate', 'open_ticked', 'source_id'];
  dataSource = new MatTableDataSource < Middleware > ();
  selection = new SelectionModel<Middleware>(false, []);
  description = "";
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  loading$ = this.loader.loading$;

  constructor(private middlewareService: MiddlewareService, public loader: LoadingService) {}
  ngOnInit(): void {
    this.getAllAlerts()
  }

  getAllAlerts() {
    this.middlewareService.getAllAlerts().subscribe(response => {
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
    this.description="";
    this.middlewareService.getBySourceId(row.source_id_middleware).subscribe(response => {
      this.description = row.data_client.description;
    })
  }
}
