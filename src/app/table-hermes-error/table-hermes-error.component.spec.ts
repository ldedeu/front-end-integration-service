import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHermesErrorComponent } from './table-hermes-error.component';

describe('TableHermesErrorComponent', () => {
  let component: TableHermesErrorComponent;
  let fixture: ComponentFixture<TableHermesErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableHermesErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHermesErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
