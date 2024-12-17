import {Component, computed, Input, OnInit, signal, WritableSignal} from '@angular/core';
import {MatListItem, MatListItemIcon, MatListItemTitle, MatNavList} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {animate, style, transition, trigger} from '@angular/animations';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-custom-sidenav',
  imports: [
    MatNavList,
    MatListItem,
    MatIcon,
    MatListItemIcon,
    MatListItemTitle,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss',
  animations: [
    trigger('fadein', [
      transition(':enter', [
        style({opacity: 0}),
        animate('1s', style({opacity: 1}))
      ])
    ])
  ]
})
export class CustomSidenavComponent implements OnInit {
  imageSrc: string = '/assets/profile-picture.jpg';

  menuItems: WritableSignal<MenuItem[]> = signal<MenuItem[]>([
    {icon: 'dashboard', label: 'Dashboard', route: 'dashboard'},
    {icon: 'account_circle', label: 'Users', route: 'users'},
    {icon: 'people', label: 'Accounts', route: 'accounts'},
    {icon: 'location_on', label: 'Locations', route: 'locations'},
    {icon: 'map', label: 'Areas', route: 'areas'},
    {icon: 'radio-outline', label: 'Readers', route: 'readers'},
    {icon: 'inventory', label: 'Inventory', route: 'inventory'},
    {icon: 'event', label: 'Events', route: 'events'},
    {icon: 'analytics', label: 'Reports', route: 'reports'},
    {icon: 'sim_card', label: 'Simulator', route: 'simulator'},
  ])

  sidenavCollapsed: WritableSignal<boolean> = signal(false);
  imageSize = computed(() => this.sidenavCollapsed() ? '50' : '100');
  fadeInTrigger: boolean = false;

  @Input() set collapsed(value: boolean) {
    this.sidenavCollapsed.set(value);
  }

  ngOnInit() {
    setTimeout(() => {
      if (!this.sidenavCollapsed()) {
        this.fadeInTrigger = true;
      }
    }, 10000);
  }
}
