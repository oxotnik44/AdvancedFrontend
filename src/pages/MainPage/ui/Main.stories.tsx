import { ComponentMeta, ComponentStory, StoryFn } from '@storybook/react';

import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18nForTests';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';

const defaultState: DeepPartial<StateSchema> = {
  counter: { value: 10 },
  user: { authData: { username: 'test' } },
};

export default {
  title: 'pages/MainPage',
  component: MainPage,
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => (
  <Provider store={createReduxStore(defaultState as StateSchema)}>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <MainPage />
      </ThemeProvider>
    </I18nextProvider>
  </Provider>
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  (Story: StoryFn) => (
    <Provider store={createReduxStore(defaultState as StateSchema)}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider initialTheme={Theme.DARK}>
          <Story />
        </ThemeProvider>
      </I18nextProvider>
    </Provider>
  ),
];
