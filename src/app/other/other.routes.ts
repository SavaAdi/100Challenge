import { Routes } from '@angular/router';
import { FormDirtyGuard } from './guards/form-dirty/form-dirty.guard';
import { OtherDocumentationComponent } from './other-documentation/other-documentation.component';

export const OTHER_ROUTES: Routes = [
    { path: '', component: OtherDocumentationComponent, canDeactivate: [FormDirtyGuard] }
  ];
