import React from 'react';
import ReactDOM from 'react-dom';
import App, { addStrikes, addBalls, reset, foulBall, addInning, addOuts } from './App';

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
});

test('addBalls adds 1 ball to the current ball count', () => {
  let actual;
  let expected;
  actual = addBalls(3)
  expected = 0
  expect(actual).toBe(expected)
  expect(actual).not.toBe(4)
});

test('addStrikes adds 1 strike to the current strike count', () => {
  let actual;
  let expected;
  actual = addStrikes(0)
  expected = 1
  expect(actual).toBe(expected)
  expect(actual).not.toBe(4)
});

test('reset sets the ball and strike count to 0 if you get a hit', () => {
  expect(reset(0)).toBe(0)
});

test('foulBall adds 1 strike to the current strike count, if at 2 strikes, do not add anymore strikes', () => {
  expect(foulBall(2)).toBe(2)
});

test('addOuts adds an out if you get a strike with two accrued already', () => {
  expect(addOuts(2, 1)).toBe(2)
});

test('addInning adds an inning if you get a third out with 2 accrued already', () => {
  expect(addInning(2, 3)).toBe(4)
});