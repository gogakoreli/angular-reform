import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { CheckboxComponent } from './checkbox.component';

storiesOf('Checkbox', module)
  .addDecorator(
    moduleMetadata({
      declarations: [CheckboxComponent],
    }),
  )
  .add(
    'Default',
    () => {
      return {
        template: `
          <ref-checkbox [label]="label" [ngModel]="value" (ngModelChange)="valueChange($event)"></ref-checkbox>
        `,
        props: {
          value: true,
          valueChange: action('onChange'),
          label: 'Is active',
        },
      };
    },
    {},
  );
