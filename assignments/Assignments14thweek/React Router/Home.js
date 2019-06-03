import React from 'react';


class Home extends React.Component{
    render(){
        return(
            <div className="container">
                <div className='row'>
                    <div className="col-md-4 offset-md-4">
                        <h2>AttainU phoenix</h2>
                        <hr/>
                        <p>We are a batch of 17 students at AttainU.
                            We are trying to learn web development.
                            We have been successful in learning Node, Express and MongoDB so far.
                            Now we are learning React with Redux.
                    
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;