import { ComponentFixture, TestBed } from '@angular/core/testing';

import { logout } from './logout.routes';

describe('logout', () => {
  let component: logout;
  let fixture: ComponentFixture<logout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [logout],
    }).compileComponents();

    fixture = TestBed.createComponent(logout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
