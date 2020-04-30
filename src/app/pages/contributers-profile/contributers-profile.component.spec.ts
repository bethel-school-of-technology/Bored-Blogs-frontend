import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributersProfileComponent } from './contributers-profile.component';

describe('ContributersProfileComponent', () => {
  let component: ContributersProfileComponent;
  let fixture: ComponentFixture<ContributersProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributersProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributersProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
