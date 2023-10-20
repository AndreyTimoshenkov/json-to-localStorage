import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiTextareaModule } from '@taiga-ui/kit';
import { FormControl, FormGroup} from '@angular/forms';
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
  JSONform = new FormGroup({
    input: new FormControl(''),
  });

  

  // data = JSON.stringify(this.JSONform.value);

  onSaveClick() {
    const value = this.JSONform?.get("input")?.value;
    console.log(value)
    // localStorage.setItem('key', this.JSONform.get("input").value);
  }
  constructor() {
  }
}
