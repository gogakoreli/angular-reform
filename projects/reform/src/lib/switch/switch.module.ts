import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SwitchComponent } from './switch.component';

@NgModule({
  declarations: [SwitchComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [SwitchComponent],
  providers: [],
})
export class SwitchModule {}
