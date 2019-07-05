import { NgModule } from '@angular/core';
import { InputModule } from './input/input.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { SwitchModule } from './switch/switch.module';
import { SelectModule } from './select/select.module';
import { TextareaModule } from './textarea/textarea.module';
import { RadiogroupModule } from './radiogroup/radiogroup.module';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    InputModule,
    CheckboxModule,
    SwitchModule,
    SelectModule,
    TextareaModule,
    RadiogroupModule,
  ],
})
export class ReformModule {}
