import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserAccountComponent } from './delete-user-account';

describe('DeleteUserAccountComponent', () => {
  let component: DeleteUserAccountComponent;
  let fixture: ComponentFixture<DeleteUserAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteUserAccountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteUserAccountComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
