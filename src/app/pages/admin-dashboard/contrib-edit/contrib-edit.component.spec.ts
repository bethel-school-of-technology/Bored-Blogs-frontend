import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribEditComponent } from './contrib-edit.component';

describe('ContribEditComponent', () => {
  let component: ContribEditComponent;
  let fixture: ComponentFixture<ContribEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContribEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContribEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
