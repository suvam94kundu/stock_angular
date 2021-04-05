import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellbtnComponent } from './cellbtn.component';

describe('CellbtnComponent', () => {
  let component: CellbtnComponent;
  let fixture: ComponentFixture<CellbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellbtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
