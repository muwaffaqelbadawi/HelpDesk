import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserAccountComponent } from './update-user-account';

describe('UpdateUserAccountComponent', () => {
  let component: UpdateUserAccountComponent;
  let fixture: ComponentFixture<UpdateUserAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateUserAccountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateUserAccountComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
