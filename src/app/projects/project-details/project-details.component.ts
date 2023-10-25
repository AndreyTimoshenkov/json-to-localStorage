import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectInterface } from './project-interface';
import { TuiButtonModule } from '@taiga-ui/core';
import { NormaliseDatePipe } from '../../normaliseDatePipe/normalise-date.pipe';


@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, TuiButtonModule, NormaliseDatePipe],
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {

  @Input() project!: ProjectInterface;
  @Input() projects!: ProjectInterface[];

  editability = false;

  onEditClick() {
    this.editability = true;
    const elements = document.getElementsByClassName("value")
    for(let i = 0; i < elements.length; i++) {
      elements[i].setAttribute("contenteditable", "true");
    }
    // elements[0].setAttribute("focus", "true");
  }

  onSaveClick(project: {}) {
    this.editability = false;
    const elements = document.getElementsByClassName("value")
    for(let i = 0; i < elements.length; i++) {
      elements[i].setAttribute("contenteditable", "false")
    }
    console.log(project);
  }

  constructor() {
    }
}
