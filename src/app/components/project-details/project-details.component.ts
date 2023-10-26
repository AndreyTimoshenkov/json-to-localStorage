import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectInterface } from '../../interfaces/project-interface';
import { TuiButtonModule } from '@taiga-ui/core';
import { NormaliseDatePipe } from '../../normalise-date-pipe/normalise-date.pipe';
import { StorageService } from 'src/app/storage-service/storage.service';
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


  projectForm!: FormGroup;
  editability = false;

  onEditClick() {
    this.editability = true;
    this.projectForm.enable();
  }

  onSaveClick() {
    this.editability = false;
    if (this.project !== undefined){
      this.project.subject = this.projectForm.value.subject;
      this.project.startDate = this.projectForm.value.startDate;
      this.project.endDate = this.projectForm.value.endDate;
      this.project.description = this.projectForm.value.description;
      this.project.createdBy = this.projectForm.value.createdBy;
      this.localStore.saveData(this.project?.id, JSON.stringify(this.project))
      this.projects = this.localStore.getAllItems();
    }
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
      this.projectForm.disable();
    }
    if (typeof changes['project'].currentValue !== 'undefined') {
      const {subject, startDate, endDate, createdBy, description} = changes['project'].currentValue;
      this.projectForm.setValue({subject, startDate, endDate, createdBy, description});
    }
  }
}


