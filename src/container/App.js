import React, {Component} from 'react';

import {Header, Main} from '../presentation';

import styles from './app.scss';

class App extends Component {

    render() {
        return (
            <div className={styles.app}>

                <Header
                    title="Vinyl"
                    rightAction="Add"
                    onRightActionClick={() => {console.log('Header Click')}}
                />

                <Main></Main>

            </div>
        );
    }
}

export default App;
