import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader/root';

import Main from './pages/Main';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

render(<Main/>, document.getElementById('app'));
const App = () => <Main />;
export default hot(App);
