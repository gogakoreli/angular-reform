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

  public testNgModel = 'testNgModel';

  public statusData = [
    {
      value: 0,
      name: 'Active',
    },
    {
      value: 1,
      name: 'Pending',
    },
    {
      value: 2,
      name: 'Canceled',
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['First Name', Validators.required],
      lastName: [null, Validators.required],
      zip: [null],
      userType: [null, Validators.required],
      feedback: [null, Validators.required],
      status: [null],
      agreeTerms: [null],
      isSwitchChecked: [null],
    });
  }

  public submit() {
    console.log(this.form.valid, this.form.value);
  }
}
