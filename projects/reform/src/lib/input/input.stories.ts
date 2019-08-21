import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { InputComponent } from './input.component';
import { FormsModule } from '@angular/forms';

// export const task = {
//   id: '1',
//   title: 'Test Task',
//   state: 'TASK_INBOX',
//   updatedAt: new Date(2018, 0, 1, 9, 0),
// };

// export const actions = {
//   onPinTask: action('onPinTask'),
//   onArchiveTask: action('onArchiveTask'),
// };

// export const onChange = action('onChange');

storiesOf('Input', module)
  .addDecorator(
    moduleMetadata({
      declarations: [InputComponent],
      imports: [FormsModule],
    }),
  )
  .add(
    'Default',
    () => {
      return {
        component: InputComponent,
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
  );
// .add('pinned', () => {
//   return {
//     template: `<ref-input [task]="task" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)" ></ref-input>`,
//     props: {
//       task: { ...task, state: 'TASK_PINNED' },
//       onPinTask: actions.onPinTask,
//       onArchiveTask: actions.onArchiveTask,
//     },
//   };
// })
// .add('archived', () => {
//   return {
//     template: `<ref-input [task]="task" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)" ></ref-input>`,
//     props: {
//       task: { ...task, state: 'TASK_ARCHIVED' },
//       onPinTask: actions.onPinTask,
//       onArchiveTask: actions.onArchiveTask,
//     },
//   };
// });
