import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormWizardComponent} from './form-wizard.component';
import {ActivatedRoute} from '@angular/router';
import {Form} from '../../models/form.model';
import {FormService} from '../../services/form.service';
import {of} from 'rxjs';

describe('FormWizardComponent', () => {
  let component: FormWizardComponent;
  let fixture: ComponentFixture<FormWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormWizardComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 'test-id'
              }
            }
          }
        },
        {
          provide: FormService,
          useValue: {
            getForm: () => of({
              name: 'test-id',
              steps: [],
              closed: false
            })
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FormWizardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });


  it('should create form with steps', () => {
    const mockForm: Form = {
      id: 'f1',
      name: 'form 1',
      closed: false,
      steps: [
        {
          id: 'step1',
          title: 'step1 title',
          categories: [
            {
              name: 'c1',
              description: 'small desc',
              questions: [
                {id: 'q1', type: 'text', label: 'Question1'}
              ]
            }
          ]
        }
      ]
    };

    component.buildForm(mockForm);

    expect(component.form.contains('step1')).toBe(true);
  })
});
