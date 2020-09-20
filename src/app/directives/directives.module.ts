import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveDocumentationComponent } from './directive-documentation/directive-documentation.component';
import { RouterModule } from '@angular/router';
import { DIRECTIVES_ROUTES } from './directive.routes';



@NgModule({
  declarations: [DirectiveDocumentationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DIRECTIVES_ROUTES)
  ]
})
export class DirectivesModule { }
