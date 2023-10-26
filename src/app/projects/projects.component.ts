import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from '../data/data.component';
import { TuiTabsModule}  from '@taiga-ui/kit';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectInterface } from './project-details/project-interface';
import { ProjectListComponent } from './project-list/project-list.component';
import { StorageService } from '../storageService/storage.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, DataComponent, TuiTabsModule, ProjectDetailsComponent, ProjectListComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  projects: ProjectInterface[] = this.localStore.getAllItems();
  project!: ProjectInterface;
  currentProject!: ProjectInterface | undefined;
  activeItemIndex = 0;

  clickHandler(id: string) {
    this.currentProject = this.projects.find((item: ProjectInterface) => { 
    return item.id === id});
    // this.router.navigate(['/projects', this.project.id])

  }

  projectid: number = -1;

  constructor(private localStore: StorageService, private route: ActivatedRoute) {
    let data = localStore.getData(String(this.projectid)) 
    if (data) {
      this.project = JSON.parse(data);
    }
  }
  ngOnInit(): void {
    this.projectid = this.route.snapshot.params['id']
    if (!this.projectid) {
      this.projectid = 1;
    } 
    this.currentProject = this.projects.find(item => { 
      return  +item.id == +this.projectid})   
    this.activeItemIndex = this.projectid - 1;
  }
}
