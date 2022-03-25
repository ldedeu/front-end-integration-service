import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMiddlewareComponent } from './table-middleware.component';

describe('TableMiddlewareComponent', () => {
  let component: TableMiddlewareComponent;
  let fixture: ComponentFixture<TableMiddlewareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMiddlewareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMiddlewareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
