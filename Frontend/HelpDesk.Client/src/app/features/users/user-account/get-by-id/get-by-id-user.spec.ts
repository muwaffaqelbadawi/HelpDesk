import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByIdUserComponent } from './get-by-id-user';

describe('GetByIdUserComponent', () => {
  let component: GetByIdUserComponent;
  let fixture: ComponentFixture<GetByIdUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetByIdUserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GetByIdUserComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
