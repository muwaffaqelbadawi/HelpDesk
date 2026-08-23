import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevokeToken } from './revoke-token';

describe('RevokeToken', () => {
  let component: RevokeToken;
  let fixture: ComponentFixture<RevokeToken>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevokeToken]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevokeToken);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
