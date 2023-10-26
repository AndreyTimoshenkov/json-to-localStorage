import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from '../data-uploading/data.component';
import { TuiTabsModule}  from '@taiga-ui/kit';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { ProjectInterface } from '../../interfaces/project-interface';
import { ProjectListComponent } from '../project-list/project-list.component';
import { StorageService } from '../../storage-service/storage.service';
import { ActivatedRoute } from '@angular/router';
import { ErrorComponent } from '../error/error.component'


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, DataComponent, TuiTabsModule, ProjectDetailsComponent, ProjectListComponent, ErrorComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit{
  projects: ProjectInterface[] = this.localStore.getAllItems();
  project!: ProjectInterface;
  currentProject: ProjectInterface | undefined;
  activeItemIndex = 0;
  projectId: number = -1;
  // error: boolean = true;

  constructor(private localStore: StorageService, private route: ActivatedRoute) {
    let data = localStore.getData(String(this.projectId)) 
    if (data) {
      this.project = JSON.parse(data);
    };
  };
  ngOnInit(): void {
    this.projectId = this.route.snapshot.params['id']
    if (!this.projectId) {
      this.projectId = 1;
    } 
    this.currentProject = this.projects.find(item => { 
      return  +item.id == +this.projectId})

    this.activeItemIndex = this.projectId - 1;
  };

  clickHandler(id: string) {
    this.currentProject = this.projects.find((item: ProjectInterface) => { 
    return item.id === id});
  };
}
