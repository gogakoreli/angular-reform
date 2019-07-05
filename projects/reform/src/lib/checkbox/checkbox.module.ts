import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CheckboxComponent } from './checkbox.component';

@NgModule({
  declarations: [CheckboxComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [CheckboxComponent],
  providers: [],
})
export class CheckboxModule {}
