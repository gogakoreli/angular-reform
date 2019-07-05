import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public form: FormGroup;

  public userTypes = ['Admin', 'User', 'Other'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      userType: [null, Validators.required],
      feedback: [null, Validators.required],
      agreeTerms: [null],
      isSwitchChecked: [null],
    });
  }

  public submit() {
    console.log(this.form.valid, this.form.value);
  }
}
