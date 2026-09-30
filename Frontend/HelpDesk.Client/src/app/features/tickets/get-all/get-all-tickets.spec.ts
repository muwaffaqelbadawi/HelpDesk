import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllTicketsComponent } from './get-all-tickets';

describe('GetAllTicketsComponent', () => {
  let component: GetAllTicketsComponent;
  let fixture: ComponentFixture<GetAllTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllTicketsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GetAllTicketsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
