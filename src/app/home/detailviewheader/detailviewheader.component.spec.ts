import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailviewheaderComponent } from './detailviewheader.component';

describe('DetailviewheaderComponent', () => {
  let component: DetailviewheaderComponent;
  let fixture: ComponentFixture<DetailviewheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailviewheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailviewheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
