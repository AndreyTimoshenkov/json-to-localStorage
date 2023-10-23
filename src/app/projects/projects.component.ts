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

  // project: ProjectInterface = {
  //     "id": "1",
  //     "subject": "Проект 1",
  //     "description": "Проект интернет-платформы для рынка лизинга",
  //     "createdBy": "Александр Иванов",
  //     "startDate": "2021-09-24T09:00:00",
  //     "endDate": "2021-10-24T09:00:00",
  //     "cost": 120000.5
  //   }

    clickHandler(project: {}) {
      // this.router.navigate(['/projects', this.project.id])
      console.log(project)
    }
  

  constructor() {
    this.value = (localStorage.getItem('key'));
    this.data = JSON.parse(this.value || '');
    this.projects = this.data.Projects;
  }
}
