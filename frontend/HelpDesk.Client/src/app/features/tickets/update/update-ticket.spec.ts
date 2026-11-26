import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTicketComponent } from './update-ticket';

describe('UpdateTicketComponent', () => {
  let component: UpdateTicketComponent;
  let fixture: ComponentFixture<UpdateTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateTicketComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateTicketComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
