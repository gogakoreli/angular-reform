import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { RadiogroupComponent } from './radiogroup.component';
import {
  boolean,
  text,
  withKnobs,
  array,
  select,
} from '@storybook/addon-knobs';

storiesOf('Radiogroup', module)
  .addDecorator(
    moduleMetadata({
      declarations: [RadiogroupComponent],
    }),
  )
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => {
      return {
        template: `
          <ref-radiogroup 
            [inline]="inline" 
            [label]="label" 
            [data]="data" 
            [ngModel]="value"
            (ngModelChange)="valueChange($event)">
          </ref-radiogroup>
        `,
        props: {
          value: select('Value', ['Male', 'Female', 'Other'], 'Male'),
          valueChange: action('onChange'),
          label: text('label', 'Gender'),
          data: array('Data', ['Male', 'Female', 'Other']),
          inline: boolean('Inline', false),
        },
      };
    },
    {},
  );
