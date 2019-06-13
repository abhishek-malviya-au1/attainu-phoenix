import React from 'react';
import ReactDOM from 'react-dom';

import {GoogleLogin} from 'react-google-login';

class App extends React.Component{
    
    googleResponse(response){
        let user = {
            name : response.profileObj.name,
            token : response.accessToken
        }
        localStorage.setItem('user',JSON.stringify(user))
    }

    
    render(){
        let user=localStorage.getItem('user');
        
        if(!user){
            return(
                <div>
                   <GoogleLogin
                   clientId=''
                   buttonText='Login With Google'
                   onSuccess={this.googleResponse}
                   onFailure={this.googleResponse} />
                </div>
            );
        }
        else{
            user=JSON.parse(user);
            return(
                <div>
                    welcome {user.name}
                </div>
            )
        }
        
    }
}





ReactDOM.render(<App />,document.getElementById('root'));