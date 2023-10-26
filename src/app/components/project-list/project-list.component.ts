import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectInterface } from '../../interfaces/project-interface';
import { TuiTabsModule } from '@taiga-ui/kit';
import { RouterLink } from '@angular/router';
import { NormaliseDatePipe } from '../../normalise-date-pipe/normalise-date.pipe';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, TuiTabsModule, RouterLink, NormaliseDatePipe],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
  @Input () project!: ProjectInterface;
}



