import React from 'react';
import {render} from 'react-dom';

import store from './redux';
import {fetchData} from './redux/actions'

import App from './container/App';

// render(<App />, document.getElementById('app'))

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(fetchData())
