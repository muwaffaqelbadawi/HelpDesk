import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByIdTicketComponent } from './get-by-id-ticket';

describe('GetByIdTicketComponent', () => {
  let component: GetByIdTicketComponent;
  let fixture: ComponentFixture<GetByIdTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetByIdTicketComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GetByIdTicketComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
