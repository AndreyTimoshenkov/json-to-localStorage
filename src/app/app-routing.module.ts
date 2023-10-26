import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './components/data-uploading/data.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';

const routes: Routes = [
  { path: 'data', pathMatch: 'full', component: DataComponent, title: 'Data'},
  { path: 'projects', component: ProjectsComponent, title: 'Projects'},
  {
    path: 'projects/:id',
    component: ProjectsComponent,
    title: 'Project details'
  },
  {path: '**', component: DataComponent, title: 'Data'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
