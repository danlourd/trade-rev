import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader/root';
import './index.css';
import Main from './pages/Main';

render(<Main/>, document.getElementById('app'));
const App = () => <Main />;
export default hot(App);
