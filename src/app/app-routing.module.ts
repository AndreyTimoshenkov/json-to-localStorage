import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';

const routes: Routes = [
  { path: 'data', component: DataComponent, title: 'Data'},
  { path: 'projects', component: ProjectsComponent, title: 'Projects'},
  {
    path: 'projects/:id',
    component: ProjectDetailsComponent,
    title: 'Project details'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
