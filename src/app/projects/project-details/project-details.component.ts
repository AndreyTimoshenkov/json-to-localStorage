import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectInterface } from './project-interface';
import { TuiButtonModule } from '@taiga-ui/core';
import { NormaliseDatePipe } from '../normalise-date.pipe';


@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, TuiButtonModule, NormaliseDatePipe],
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {

  @Input() project!: ProjectInterface;

  editability = false;

  onEditClick() {
    this.editability = true;
    const elements = document.getElementsByClassName('value')
    for(let i = 0; i < elements.length; i++) {
      elements[i].setAttribute("contenteditable", "true");
      elements[i].setAttribute("tabindex", String(i + 1));
    }
    elements[0].setAttribute("autofocus", "true");
  }

  onSaveClick() {
    this.editability = false;
    const elements = document.getElementsByClassName('value')
    for(let i = 0; i < elements.length; i++) {
      elements[i].setAttribute("contenteditable", "false")
    }
  }

  constructor() {
    }

}
