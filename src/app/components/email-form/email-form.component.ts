import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent {

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.initializeForm();
  }

  private initializeForm() {
    this.form = this.formBuilder.group({
      // first is the default value, the second param is an array of validators
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['']
    });
  }

  public submitMessage() {
    console.log('100 Front End Components');
  }

}
