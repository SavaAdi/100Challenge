import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card/card.component';
import { FilterTermPipe } from '../pipes/filter-term/filter-term.pipe';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';


@NgModule({
  declarations: [
    CardComponent,
    FilterTermPipe,
    SnackbarComponent
  ],
  exports: [
    CardComponent,
    FilterTermPipe,
    SnackbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
