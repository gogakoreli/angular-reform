import { configure } from '@storybook/angular';

// automatically import all files ending in *.stories.ts
const req = require.context('../projects/reform/src', true, /\.stories\.ts$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);

import 'bootstrap/dist/css/bootstrap.css';
