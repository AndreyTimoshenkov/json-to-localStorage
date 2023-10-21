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
  // value = JSON.stringify(localStorage.getItem('key'));
  // data: JSON | null  = JSON.parse(localStorage.getItem('key'));

  // request = fetch(localStorage['key'))
  // .then((response) => response.json())
  // .then((data) => {});

  constructor() {
    // this.data = JSON.parse(this.value);
  }
}
