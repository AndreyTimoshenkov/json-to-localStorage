import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from '../data/data.component';
import { TuiTabsModule}  from '@taiga-ui/kit';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { normaliseDate } from './project-details/normaliseDate';
import { ProjectInterface } from './project-details/project-interface';
import { ProjectListComponent } from './project-list/project-list.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, DataComponent, TuiTabsModule, ProjectDetailsComponent, ProjectListComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  normaliseDate = normaliseDate;
  value: string | null;
  data;
  projects: ProjectInterface[];
  project: ProjectInterface
  //  = this.projects[0];

  clickHandler(project: ProjectInterface) {
    // this.router.navigate(['/projects', this.project.id])
    this.project = project;
    console.log(project);
    return project;
  }

  constructor() {
    this.value = (localStorage.getItem('key'));
    this.data = JSON.parse(this.value || '');
    this.projects = this.data.Projects;
    this.project = this.projects[0];
  }
}
