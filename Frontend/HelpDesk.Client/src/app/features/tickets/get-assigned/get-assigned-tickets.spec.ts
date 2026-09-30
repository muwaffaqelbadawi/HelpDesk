import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAssignedTicketsComponent } from './get-assigned-tickets';

describe('GetAssignedTicketsComponent', () => {
  let component: GetAssignedTicketsComponent;
  let fixture: ComponentFixture<GetAssignedTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAssignedTicketsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GetAssignedTicketsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
