import {Component, computed, signal, WritableSignal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {CustomSidenavComponent} from './components/custom-sidenav/custom-sidenav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbar, MatIcon, MatIconButton, MatSidenavContainer, MatSidenav, MatSidenavContent, CustomSidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  collapsed: WritableSignal<boolean> = signal(false);
  sidenavWidth = computed(() => this.collapsed() ? '60px' : '250px');
}


