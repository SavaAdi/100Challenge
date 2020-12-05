import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card/card.component';
import { FilterTermPipe } from '../pipes/filter-term/filter-term.pipe';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';
import { TabsComponent } from '../components/tabs/tabs.component';


@NgModule({
  declarations: [
    CardComponent,
    FilterTermPipe,
    SnackbarComponent,
    TabsComponent
  ],
  exports: [
    CardComponent,
    FilterTermPipe,
    SnackbarComponent,
    TabsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
