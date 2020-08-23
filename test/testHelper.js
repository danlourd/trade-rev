import '@babel/polyfill';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true,
});

const pagesContext = require.context('../src/pages', true, /.*\.jsx*$/);
pagesContext.keys().forEach(pagesContext);

const testsContext = require.context('.', true, /.*\.spec\..*$/);
testsContext.keys().forEach(testsContext);
