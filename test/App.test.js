import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../src/App';

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(shallow(<App />).contains(<div className="foo" />)).toBe(true);
  });

  it("contains spec with an expectation", function() {
    expect(shallow(<App />).is('.foo')).toBe(true);
  });

  it("contains spec with an expectation", function() {
    expect(mount(<App />).find('.foo').length).toBe(1);
  });

  it("can run an expectation with render", function() {
    expect(render(<App />).find('.foo').length).toBe(1);
  });
});