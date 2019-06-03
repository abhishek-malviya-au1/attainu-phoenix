import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {store} from './store.js';
import {Menu} from './Menu.js';


class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">

                        <h2>Dog Breeds</h2>
                        <hr/>

                        <Provider store={store}>
                            
                            <div className="btn-group-vertical">
                                <Menu />
                            </div>

                        </Provider>


                    </div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById("root"));