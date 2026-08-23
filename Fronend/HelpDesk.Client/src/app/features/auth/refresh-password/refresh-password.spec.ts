import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshPassword } from './refresh-password';

describe('RefreshPassword', () => {
  let component: RefreshPassword;
  let fixture: ComponentFixture<RefreshPassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefreshPassword],
    }).compileComponents();

    fixture = TestBed.createComponent(RefreshPassword);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
