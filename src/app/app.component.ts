import { Component } from '@angular/core';
import { AccordionItem } from './components/accordion/accordion-item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public accordionItems: AccordionItem[] = [
    {
      title: 'Awesome title',
      content: 'This is an awesome component codex',
      isExpanded: false,
    },
    {
      title: 'The road to seniority',
      content: 'Starts with a accordion component',
      isExpanded: false,
    },
  ];
  public progressValue = 25;
}
