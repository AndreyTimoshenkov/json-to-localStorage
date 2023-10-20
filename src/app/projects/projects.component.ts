import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from '../data/data.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, DataComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  value:string;
  data:JSON;

  constructor() {
    this.value = JSON.stringify(localStorage.getItem('key'));
    this.data = JSON.parse(this.value);
  }
}
