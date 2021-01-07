import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card/card.component';
import { FilterTermPipe } from '../pipes/filter-term/filter-term.pipe';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';
import { TabsComponent } from '../components/tabs/tabs.component';
import { ModalComponent } from '../components/modal/modal.component';


@NgModule({
  declarations: [
    CardComponent,
    FilterTermPipe,
    SnackbarComponent,
    TabsComponent,
    ModalComponent
  ],
  exports: [
    CardComponent,
    FilterTermPipe,
    SnackbarComponent,
    TabsComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
