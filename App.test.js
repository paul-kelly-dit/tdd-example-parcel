import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('should render a title', () => {
    expect(app.find('h1').exists()).toBe(true);
  });

  it('should also render an image of an event happening', () => {
    expect(app.find('img').exists()).toBe(true);
  });

});