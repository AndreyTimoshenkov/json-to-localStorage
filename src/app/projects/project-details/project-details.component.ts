import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ActivatedRoute } from '@angular/router';
import { normaliseDate } from './normaliseDate'
import { ProjectInterface } from './project-interface';
// import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {

  normaliseDate = normaliseDate;

  @Input() project!: ProjectInterface;

}
