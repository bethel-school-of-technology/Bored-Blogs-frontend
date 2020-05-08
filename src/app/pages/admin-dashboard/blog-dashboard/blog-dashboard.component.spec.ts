import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDashboardComponent } from './blog-dashboard.component';

describe('BlogDashboardComponent', () => {
  let component: BlogDashboardComponent;
  let fixture: ComponentFixture<BlogDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
