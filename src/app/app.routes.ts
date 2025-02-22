import { Routes } from '@angular/router';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { AddServiceComponent } from './components/add-service/add-service.component';

export const routes: Routes = [
    { path: '', redirectTo: 'services', pathMatch: 'full' },
    { path: 'services', component: ServiceListComponent },
    { path: 'services/add', component: AddServiceComponent }
];
