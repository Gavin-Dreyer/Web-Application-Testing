import React from 'react';
import ReactDOM from 'react-dom';
import App, { addStrikes, addBalls, reset, foulBall } from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('addBalls adds 1 ball to the current ball count', () => {
  let actual;
  let expected;
  actual = addBalls(0)
  expected = 1
  expect(actual).toBe(expected)
  expect(actual).not.toBe(4)

  // litte cleaner tests
  // expect(addTouchdown(10)).toBe(17);
  // expect(addTouchdown(10)).not.toBe(13);
});

test('addStrikes adds 1 strike to the current strike count', () => {
  let actual;
  let expected;
  actual = addStrikes(0)
  expected = 1
  expect(actual).toBe(expected)
  expect(actual).not.toBe(4)

  // litte cleaner tests
  // expect(addTouchdown(10)).toBe(17);
  // expect(addTouchdown(10)).not.toBe(13);
});
