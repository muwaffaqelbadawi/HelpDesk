import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTicketComponent } from './delete-ticket';

describe('DeleteTicketComponent', () => {
  let component: DeleteTicketComponent;
  let fixture: ComponentFixture<DeleteTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteTicketComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteTicketComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
