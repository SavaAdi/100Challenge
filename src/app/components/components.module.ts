import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { AccordionComponent } from './accordion/accordion.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RouterModule } from '@angular/router';
import { COMPONENTS_ROUTES } from './component.routes';
import { StarRatingsComponent } from './star-ratings/star-ratings.component';
import { ComponentDocumentationComponent } from './component-documentation/component-documentation.component';
import { CreditCardInputComponent } from './credit-card-input/credit-card-input.component';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { TwitterPostComponent } from './twitter-post/twitter-post.component';
import { LinkedinPostComponent } from './linkedin-post/linkedin-post.component';
import { ModalComponent } from './modal/modal.component';
import { QuoteComponent } from './quote/quote.component';

@NgModule({
  declarations: [
    ComponentDocumentationComponent,
    StarRatingsComponent,
    AccordionComponent,
    ProgressBarComponent,
    CreditCardInputComponent,
    LoaderComponent,
    TwitterPostComponent,
    LinkedinPostComponent,
    ModalComponent,
    QuoteComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(COMPONENTS_ROUTES)
  ]
})
export class ComponentsModule { }
