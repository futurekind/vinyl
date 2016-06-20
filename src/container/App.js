import React, {Component} from 'react';

import {Header} from '../presentation';

import './app.scss';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header
                    title="Vinyl"
                    rightAction="Add"
                    onRightActionClick={() => {console.log('Header Click')}}
                />
            </div>
        );
    }
}

export default App;
