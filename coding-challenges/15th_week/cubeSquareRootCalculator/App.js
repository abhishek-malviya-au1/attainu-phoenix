import React from 'react';
import {Provider} from 'react-redux';

import {Input} from './Input.js';
import {SquareButton} from './SquareButton.js';
import {CubeButton} from './CubeButton.js';
import {SquareRootButton} from './SquareRootButton.js';
import {Display} from './Display.js';
import {store} from './store.js';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <h2>The Number App</h2>
                        <hr/>

                        <Provider store={store}>
                            <Input />

                            <br/>

                            <SquareButton />
                            <CubeButton />
                            <SquareRootButton />

                            <Display />

                        </Provider>
                    </div>
                </div>
            </div>
        );
    }
}

export {App};