import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectInterface } from '../project-details/project-interface';
import { TuiTabsModule } from '@taiga-ui/kit';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, TuiTabsModule],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
  clickHandler($event: any) {
    console.log($event.target)
  }

  @Input () project!: ProjectInterface;

}
