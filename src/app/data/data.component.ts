import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiTextareaModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiModeModule, TuiSvgModule, TuiTextfieldControllerModule } from '@taiga-ui/core';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule, TuiTextareaModule, FormsModule,
    ReactiveFormsModule, TuiTextfieldControllerModule, TuiSvgModule, TuiModeModule, TuiTextfieldControllerModule, TuiButtonModule ],
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent {

  value: string;

  onSaveClick(value:string) {
    localStorage.setItem('key', value);
  }
  constructor() {
    this.value = '';
  }
}
