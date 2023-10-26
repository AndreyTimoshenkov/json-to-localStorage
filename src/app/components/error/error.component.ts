import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiErrorModule } from '@taiga-ui/core';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule, TuiErrorModule],
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  error:string = 'Наверное, вы не загрузили данные. Пожалуйста, попробуйте ещё раз.';
}
