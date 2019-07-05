import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RadiogroupComponent } from './radiogroup.component';

@NgModule({
  declarations: [RadiogroupComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [RadiogroupComponent],
  providers: [],
})
export class RadiogroupModule {}
