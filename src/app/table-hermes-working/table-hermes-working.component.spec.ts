import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHermesWorkingComponent } from './table-hermes-working.component';

describe('TableHermesWorkingComponent', () => {
  let component: TableHermesWorkingComponent;
  let fixture: ComponentFixture<TableHermesWorkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableHermesWorkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHermesWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
