import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputComponent } from './input.component';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [InputComponent],
  providers: [],
})
export class InputModule {}
