import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { AccordionComponent } from './accordion/accordion.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RouterModule } from '@angular/router';
import { COMPONENTS_ROUTES } from './component.routes';
import { StarRatingsComponent } from './star-ratings/star-ratings.component';
import { ComponentDocumentationComponent } from './component-documentation/component-documentation.component';

@NgModule({
  declarations: [
    ComponentDocumentationComponent,
    StarRatingsComponent,
    AccordionComponent,
    ProgressBarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(COMPONENTS_ROUTES)
  ]
})
export class ComponentsModule { }
