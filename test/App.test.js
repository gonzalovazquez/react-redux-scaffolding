import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, render, shallow } from 'enzyme';

import App from '../src/App';

chai.use(chaiEnzyme()) // Note the invocation at the end

const it = render(<App />);

describe('App component', () => {
  it('contains Todo Component', (wrapper) => {
     expect(wrapper.find('#todo')).to.exist;
  });
});
