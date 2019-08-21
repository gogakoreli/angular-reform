import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { InputComponent } from './input.component';

storiesOf('Input', module)
  .addDecorator(
    moduleMetadata({
      declarations: [InputComponent],
    }),
  )
  .add(
    'Default',
    () => {
      return {
        template: `
          <ref-input [label]="label" [ngModel]="value" (ngModelChange)="valueChange($event)"></ref-input>
        `,
        props: {
          value: 'Goga',
          valueChange: action('onChange'),
          label: 'First name',
        },
      };
    },
    {},
  )
  .add(
    'Number',
    () => {
      return {
        template: `
          <ref-input type="number" [label]="label" [ngModel]="value" (ngModelChange)="valueChange($event)"></ref-input>
        `,
        props: {
          value: 18,
          valueChange: action('onChange'),
          label: 'Age',
        },
      };
    },
    {},
  );
