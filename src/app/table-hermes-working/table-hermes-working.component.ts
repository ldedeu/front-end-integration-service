import { HermesService } from '../services/hermes.service';
import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Hermes } from '../models/hermes.model';
import { MatSort, MatSortModule } from '@angular/material/sort'; 
import * as $ from 'jquery';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-table-hermes-working',
  templateUrl: './table-hermes-working.component.html',
  styleUrls: ['./table-hermes-working.component.scss']
})

export class TableHermesWorkingComponent implements OnInit {
  displayedColumns: string[] = ['select', 'source_id', 'company', 'ciid', 'middleware_response', 'delivered', 'role_function'];
  dataSource = new MatTableDataSource <Hermes> ();
  selection = new SelectionModel<Hermes>(false, []);
  application_payload = "";
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  loading$ = this.loader.loading$;

  constructor(private hermesService: HermesService, public loader: LoadingService) {}
  
  ngOnInit(): void {
    this.getAllAlerts();
  }

  getAllAlerts() {
    this.hermesService.getAllAlerts().subscribe(response => {
      this.dataSource = new MatTableDataSource<any>(response);
      this.dataSource.sort = this.sort;
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
    this.application_payload="";
    this.hermesService.getBySourceId(row.source_id).subscribe(response => {
      this.application_payload = response;
    })
  }
}
