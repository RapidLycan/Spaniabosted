import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsGridComponent } from './projects-grid.component';

describe('ProjectsGridComponent', () => {
  let component: ProjectsGridComponent;
  let fixture: ComponentFixture<ProjectsGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsGridComponent]
    });
    fixture = TestBed.createComponent(ProjectsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
