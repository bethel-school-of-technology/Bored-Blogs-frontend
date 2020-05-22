import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubmissionDetailsComponent } from './user-submission-details.component';

describe('UserSubmissionDetailsComponent', () => {
  let component: UserSubmissionDetailsComponent;
  let fixture: ComponentFixture<UserSubmissionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSubmissionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSubmissionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
