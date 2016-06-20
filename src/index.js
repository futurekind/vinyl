import React from 'react';
import {render} from 'react-dom';

import store from './redux';

import App from './container/App';

render(<App />, document.getElementById('app'))
