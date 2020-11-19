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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { TwitterPostComponent } from './twitter-post/twitter-post.component';
import { LinkedinPostComponent } from './linkedin-post/linkedin-post.component';
import { ModalComponent } from './modal/modal.component';
import { QuoteComponent } from './quote/quote.component';
import { ToggleComponent } from './toggle/toggle.component';
import { RichTextViewerComponent } from './rich-text-viewer/rich-text-viewer.component';
import { DebounceSearchComponent } from './debounce-search/debounce-search.component';
import { SearchListComponent } from './search-list/search-list.component';
import { CounterComponent } from './counter/counter.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { PagingComponent } from './paging/paging.component';
import { TabsComponent } from './tabs/tabs.component';
import { SortTableComponent } from './sort-table/sort-table.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { RibbonComponent } from './ribbon/ribbon.component';

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
    QuoteComponent,
    ToggleComponent,
    RichTextViewerComponent,
    DebounceSearchComponent,
    SearchListComponent,
    CounterComponent,
    SimpleTableComponent,
    PagingComponent,
    TabsComponent,
    SortTableComponent,
    EmailFormComponent,
    RibbonComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(COMPONENTS_ROUTES)
  ]
})
export class ComponentsModule { }
