import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMyTicketsComponent } from './get-my-tickets';

describe('GetMyTicketsComponent', () => {
  let component: GetMyTicketsComponent;
  let fixture: ComponentFixture<GetMyTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetMyTicketsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GetMyTicketsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
