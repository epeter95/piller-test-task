import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormListComponent } from './form-list.component';

describe('FormListComponent', () => {
  let component: FormListComponent;
  let fixture: ComponentFixture<FormListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
