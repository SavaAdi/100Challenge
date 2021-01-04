import { Routes } from '@angular/router';
import { ServiceDocumentationComponent } from './service-documentation/service-documentation.component';

export const SERVICES_ROUTES: Routes = [
    { path: '', component: ServiceDocumentationComponent },
    { path: ':id', component: ServiceDocumentationComponent } // You add params like :id/:name/sometingstatic/:anotherparam
];
