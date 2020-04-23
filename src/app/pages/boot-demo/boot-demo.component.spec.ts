import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootDemoComponent } from './boot-demo.component';

describe('BootDemoComponent', () => {
  let component: BootDemoComponent;
  let fixture: ComponentFixture<BootDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
