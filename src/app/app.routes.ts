import {Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {UsersComponent} from './pages/users/users.component';
import {AccountsComponent} from './pages/accounts/accounts.component';
import {LocationsComponent} from './pages/locations/locations.component';
import {AreasComponent} from './pages/areas/areas.component';
import {ReadersComponent} from './pages/readers/readers.component';
import {EventsComponent} from './pages/events/events.component';
import {ReportsComponent} from './pages/reports/reports.component';
import {SimulatorComponent} from './pages/simulator/simulator.component';
import {InventoryComponent} from './pages/inventory/inventory.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'accounts',
    component: AccountsComponent
  },
  {
    path: 'locations',
    component: LocationsComponent
  },
  {
    path: 'areas',
    component: AreasComponent
  },
  {
    path: 'readers',
    component: ReadersComponent
  },
  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'simulator',
    component: SimulatorComponent
  }
];
