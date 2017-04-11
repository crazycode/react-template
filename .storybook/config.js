import {configure} from '@kadira/storybook';

const req = require.context('../src/', true, /.stories.tsx$/);

const loadStories = () => {
  req.keys().forEach((filename) => req(filename))
};

configure(loadStories, module);
