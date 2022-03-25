import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHermesComponent } from './table-hermes.component';

describe('TableHermesComponent', () => {
  let component: TableHermesComponent;
  let fixture: ComponentFixture<TableHermesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableHermesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHermesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
