import React, {Component} from 'react';

import {Header} from '../presentation';

import './app.scss';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header title="Vinyl" />
            </div>
        );
    }
}

export default App;
