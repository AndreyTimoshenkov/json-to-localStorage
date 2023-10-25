import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from '../data/data.component';
import { TuiTabsModule}  from '@taiga-ui/kit';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectInterface } from './project-details/project-interface';
import { ProjectListComponent } from './project-list/project-list.component';
import { StorageService } from '../storageService/storage.service';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, DataComponent, TuiTabsModule, ProjectDetailsComponent, ProjectListComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: ProjectInterface[] = this.localStore.getAllItems();
  project: ProjectInterface;


  clickHandler(project: ProjectInterface) {
    // this.router.navigate(['/projects', this.project.id])
    this.project = project;
  }

  constructor(private localStore: StorageService) {
    this.project = this.projects[0];
  }
}
