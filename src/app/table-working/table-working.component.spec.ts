import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWorkingComponent } from './table-working.component';

describe('TableWorkingComponent', () => {
  let component: TableWorkingComponent;
  let fixture: ComponentFixture<TableWorkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableWorkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
