import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { IFormDIrty } from './form-dirty.interface';

@Injectable({
  providedIn: 'root'
})
export class FormDirtyGuard implements CanDeactivate<IFormDIrty> {

  public canDeactivate(component: IFormDIrty): boolean {

    if (component.form.dirty) {
      return confirm('Your form is dirty. Are you sure you want to leave the page?');
    }

    return true;
  }
}
