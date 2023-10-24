import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiTextareaModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiModeModule, TuiSvgModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule, TuiTextareaModule, FormsModule,
    ReactiveFormsModule, TuiTextfieldControllerModule, TuiSvgModule, TuiModeModule, 
    TuiTextfieldControllerModule, TuiButtonModule, RouterLink ],
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent {

  value: string;
  router: Router = inject(Router);

  onSaveClick(value:string) {
    console.log(JSON.parse(value))
    if (value.length !== 0) {
      localStorage.setItem('key', value);
      alert('Данные сохранены. Вы будете перенаправлены на описание проектов.')
      this.router.navigate(['/projects'])
    } else {
      alert('Пожалуйста, добавьте данные в формате JSON')
    }}

  
  constructor() {
    this.value = '';
  }
}
