import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupperCommentComponent } from './supper-comment.component';

describe('SupperCommentComponent', () => {
  let component: SupperCommentComponent;
  let fixture: ComponentFixture<SupperCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupperCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupperCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
