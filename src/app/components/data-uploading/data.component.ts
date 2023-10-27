import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiTextareaModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiSvgModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { Router, RouterLink } from '@angular/router';
import { StorageService } from '../../storage-service/storage.service';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule, TuiTextareaModule, FormsModule,
    ReactiveFormsModule, TuiTextfieldControllerModule, TuiSvgModule, 
    TuiTextfieldControllerModule, TuiButtonModule, RouterLink],
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent {

  value: string;
  router: Router = inject(Router);

  onSaveClick(value:string) {
    if (!value) {
      alert('Вероятно, вы пытаетесь сохранить пустой объект. Пожалуйста, попробуйте еще раз.')
      return;
    }
    let projects = (JSON.parse(value)).Projects;
    for (let project of projects) {
      this.localStore.saveData(project.id, JSON.stringify(project));
    }
    alert('Данные сохранены. Вы будете перенаправлены на описание проектов.')
      this.router.navigate(['/projects'])
  }
  
  constructor(private localStore: StorageService) {
    this.value = '';
  }
}
