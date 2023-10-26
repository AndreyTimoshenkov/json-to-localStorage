import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectInterface } from './project-interface';
import { TuiButtonModule } from '@taiga-ui/core';
import { NormaliseDatePipe } from '../../normaliseDatePipe/normalise-date.pipe';
import { StorageService } from 'src/app/storageService/storage.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';


@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, TuiButtonModule, NormaliseDatePipe, ReactiveFormsModule,
    TuiInputModule],
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnChanges {

  @Input() project!: ProjectInterface | undefined;
  @Input() projects!: ProjectInterface[];
  // @Input() currentProject!: ProjectInterface


  projectForm!: FormGroup;
  editability = false;

  onEditClick() {
    this.editability = true;
    this.projectForm.enable();
    console.log(this.project?.subject)
    
    // this.projectForm.disable()
    // const elements = document.getElementsByClassName("value")
    // for(let i = 0; i < elements.length; i++) {
    //   elements[i].setAttribute("contenteditable", "true");
    // }
    // elements[0].focus();
  }

  onSaveClick(project: ProjectInterface | undefined) {
    this.editability = false;
    this.projectForm.disable();
    // const elements = document.getElementsByClassName("value")
    // for(let i = 0; i < elements.length; i++) {
    //   elements[i].setAttribute("contenteditable", "false")
    // }
    // this.localStore.saveData(project.id, JSON.stringify(project))
    // console.log(project);
  }

  constructor(private localStore: StorageService) {
  
}

  ngOnChanges(changes: SimpleChanges) {
    if (typeof this.projectForm === 'undefined') {
      this.projectForm = new FormGroup({
        subject: new FormControl(),
        startDate: new FormControl(),
        endDate: new FormControl(),
        createdBy: new FormControl(),
        description: new FormControl()
      });
      this.projectForm.disable()
    }
    if (typeof changes['project'].currentValue !== 'undefined') {
      const {subject, startDate, endDate, createdBy, description} = changes['project'].currentValue;
      this.projectForm.setValue({subject, startDate, endDate, createdBy, description})
    }
  }
}


