import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Text',
  text: 'qweqwe',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Text',
  text: 'qweqwe',
  theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Text',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Text',
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Text',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Text',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
