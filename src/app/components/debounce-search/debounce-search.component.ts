import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-debounce-search',
  templateUrl: './debounce-search.component.html',
  styleUrls: ['./debounce-search.component.scss']
})
export class DebounceSearchComponent {

  public searchTerm = '';

  @Input() public placeholder = 'Search';
  @Output() public searchUpdate = new EventEmitter<string>();
  // The $ at the end is a convention for saying that the variable is some sort of stream
  private searchUpdate$ = new Subject<string>();

  constructor() {
    this.searchUpdate$.pipe(
      debounceTime(550),
      distinctUntilChanged()
    ).subscribe(value => {
        this.searchUpdate.emit(value);
    });
  }

  public updateSearchTerm(term: string): void {
   this.searchUpdate$.next(term);
  }

}
