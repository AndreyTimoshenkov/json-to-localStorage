import { Component, Inject, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectInterface } from '../project-details/project-interface';
import { TuiTabsModule } from '@taiga-ui/kit';
import { Router, RouterLink } from '@angular/router';
import { NormaliseDatePipe } from '../../normaliseDatePipe/normalise-date.pipe';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, TuiTabsModule, RouterLink, NormaliseDatePipe],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {

  activeItemIndex = 0;
  
  clickHandler($event: any) {
    // this.router.navigate(['/projects', this.project.id])
    console.log($event.target)
  }

  @Input () project!: ProjectInterface;

  // route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  projectid = -1;
    
  //   constructor() {
  //     this.projectid = Number(this.route.snapshot.params['id']);
  // }  

}
