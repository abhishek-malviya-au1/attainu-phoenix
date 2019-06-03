import React from'react';
import {BrowserRouter as Router , Route , Link} from 'react-router-dom';


import Home from './Home.js';
import AboutUs from './AboutUs.js';
import ContactUs from './ContactUs.js';

class App extends React.Component{
    
    
    render(){
        return(
           <Router>
                        <div>
                            <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-4 offset-md-4">
                                                <ul class="nav justify-content-center">
                                                    <li class="nav-item">
                                                        <Link class="nav-link active" to="/">Home</Link>
                                                    </li>
                                                    <li class="nav-item">
                                                        <Link class="nav-link" to="/about-us">About Us</Link>
                                                    </li>
                                                    <li class="nav-item">
                                                        <Link class="nav-link" to="/contact-us">Contact Us</Link>
                                                    </li>
                                                </ul>
                                        </div>
                                    </div>
                            </div>
                            <Route path="/" exact={true} component={Home}/>
                            <Route path="/about-us" component={AboutUs}/>
                            <Route path="/contact-us" component={ContactUs}/>
                            
                    </div>
           </Router>
          
           
        )
    }
}


export default App;