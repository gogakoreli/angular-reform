import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { RadiogroupComponent } from './radiogroup.component';

storiesOf('Radiogroup', module)
  .addDecorator(
    moduleMetadata({
      declarations: [RadiogroupComponent],
    }),
  )
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
          value: true,
          valueChange: action('onChange'),
          label: 'Gender',
          data: ['Male', 'Female', 'Other'],
          inline: false,
        },
      };
    },
    {},
  );
