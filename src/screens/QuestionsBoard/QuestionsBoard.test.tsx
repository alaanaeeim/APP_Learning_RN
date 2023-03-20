import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import QuestionsBoard from './QuestionsBoard';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

test('Test QuestionsBoard Screen', () => {
  const {toJSON, getByLabelText, getAllByLabelText} = render(
    <QuestionsBoard />,
  );

  expect(toJSON()).toMatchSnapshot();
  const helloText = getByLabelText('usernameText');
  const allInputs = getAllByLabelText('username');
  expect(helloText.props.children).toBe('Alaa Naeeim');

  fireEvent.changeText(allInputs[0], 'Mina Naeeim');
  expect(helloText.props.children).toBe('Mina Naeeim');

  const changeUsernameBtn = getByLabelText('change username');
  fireEvent.press(changeUsernameBtn);
  expect(helloText.props.children).toBe('Bassem Naeeim');

  console.log(helloText.children);
});
