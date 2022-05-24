import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntercarddetailsComponent } from './entercarddetails.component';

describe('EntercarddetailsComponent', () => {
  let component: EntercarddetailsComponent;
  let fixture: ComponentFixture<EntercarddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntercarddetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntercarddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
