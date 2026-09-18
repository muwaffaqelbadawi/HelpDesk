import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshTokenComponent } from './refresh-token';

describe('RefreshToken', () => {
  let component: RefreshTokenComponent;
  let fixture: ComponentFixture<RefreshTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefreshTokenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RefreshTokenComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
