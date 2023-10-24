import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { normaliseDate } from './normaliseDate'
import { ProjectInterface } from './project-interface';
import { TuiButtonModule } from '@taiga-ui/core';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, TuiButtonModule],
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {

  normaliseDate = normaliseDate;

  @Input() project!: ProjectInterface;

  onEditClick(event: Event) {
    console.log(event)
  }

  // startDate:string
  // endDate:string 

  // = this.project.startDate || '';
  // = this.project.endDate || '';

  constructor() {
    // this.startDate = normaliseDate(this.project.startDate);
    // this.endDate = normaliseDate(this.project.endDate);
    }

}
