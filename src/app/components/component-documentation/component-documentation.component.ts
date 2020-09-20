import { Component, OnInit } from '@angular/core';
import { AccordionItem } from '../accordion/accordion-item.interface';

@Component({
  selector: 'app-component-documentation',
  templateUrl: './component-documentation.component.html',
  styleUrls: ['./component-documentation.component.scss']
})
export class ComponentDocumentationComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }



}
