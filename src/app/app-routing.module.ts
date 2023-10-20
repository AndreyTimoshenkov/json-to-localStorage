import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HeaderComponent } from './header/header.component';
// import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: 'data', component: DataComponent, title: 'Data'},
  { path: 'projects', component: ProjectsComponent, title: 'Projects'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
