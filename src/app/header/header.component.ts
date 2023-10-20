import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TuiTabsModule} from '@taiga-ui/kit';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TuiTabsModule, AppRoutingModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  activeItemIndex = 0;

  onTabClick(index: number): void {
    this.activeItemIndex = index - 1;
    console.log(this.activeItemIndex);
}

}


