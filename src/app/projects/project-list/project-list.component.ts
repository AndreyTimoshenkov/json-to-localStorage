import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectInterface } from '../project-details/project-interface';
import { TuiTabsModule } from '@taiga-ui/kit';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, TuiTabsModule, RouterLink],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
  clickHandler($event: any) {
    // this.router.navigate(['/projects', this.project.id])
    console.log($event.target)
  }

  @Input () project!: ProjectInterface;

  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  projectid = -1;
    
    constructor() {
      this.projectid = Number(this.route.snapshot.params['id']);
  }  

}
