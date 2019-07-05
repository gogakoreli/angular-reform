import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TextareaComponent } from './textarea.component';

@NgModule({
  declarations: [TextareaComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [TextareaComponent],
  providers: [],
})
export class TextareaModule {}
