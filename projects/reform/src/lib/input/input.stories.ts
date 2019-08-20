import { storiesOf, moduleMetadata } from '@storybook/angular';
// import { action } from '@storybook/addon-actions';
import { InputComponent } from './input.component';

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

storiesOf('Task', module)
  .addDecorator(
    moduleMetadata({
      declarations: [InputComponent],
    }),
  )
  .add('default', () => {
    return {
      template: `<ref-input>BLA</ref-input>`,
      props: {
        // task,
        // onPinTask: actions.onPinTask,
        // onArchiveTask: actions.onArchiveTask,
      },
    };
  });
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
