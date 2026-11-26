import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevokeTokenComponent } from './revoke-token';

describe('RevokeTokenComponent', () => {
  let component: RevokeTokenComponent;
  let fixture: ComponentFixture<RevokeTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevokeTokenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RevokeTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
