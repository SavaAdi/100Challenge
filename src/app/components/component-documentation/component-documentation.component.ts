import { Component } from '@angular/core';
import { AccordionItem } from '../accordion/accordion-item.interface';
import { ButtonMeta } from '../button-toggle/button-meta.model';
import { LoaderType } from '../loader/models/loader-type.enum';
import { RibbonLocation } from '../ribbon/ribbon-location.enum';
import { RibbonType } from '../ribbon/ribbon-type.enum';

@Component({
  selector: 'app-component-documentation',
  templateUrl: './component-documentation.component.html',
  styleUrls: ['./component-documentation.component.scss']
})
export class ComponentDocumentationComponent {

  public RibbonType = RibbonType;
  public RibbonLocation = RibbonLocation;
  public ribbonStyle = { type: RibbonType.Info, location: RibbonLocation.BottomLeft };

  public buttonToggleOptions: ButtonMeta[] = [
    new ButtonMeta({ id: 1, title: 'Bold' }),
    new ButtonMeta({ id: 2, title: 'Italic' }),
    new ButtonMeta({ id: 3, title: 'Underline' }),
  ];

  public accordionItems: AccordionItem[] = [
    {
      title: 'Awesome title',
      content: 'This is an awesome component codex',
      isExpanded: false,
    },
    {
      title: 'The road to seniority',
      content: 'Starts with an accordion component',
      isExpanded: false,
    },
  ];
  public progressValue = 25;
  public loaderType = LoaderType.Loading;
  public toggleValue = false;


  public tabs: { title: string, active: boolean }[] = [
    { title: 'Tab for you', active: true },
    { title: 'Tab for me', active: false },
  ];
  public selectedTab = 0;

  public debounceExampleMethod(value: string): void {
    console.log('Component Documentation', value);
  }

}
