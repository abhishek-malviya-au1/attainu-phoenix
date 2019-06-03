import React from'react';


class App extends React.Component{
    validate(){
        if(this.props.state.verification===true){
            return <h2>You are logged in</h2>
        }else {
            return <h2 >username or password is incorrect try again</h2>
        }
    }
    
    render(){
        return(
            
            <div className = "container">
                <div className="row">
                    <div className="col-md-3 offset-md-5" style={{marginTop : 120}}>
                        <h2>Login</h2>
                        <hr></hr>
                    </div> 
                </div>  
                <div className="row">
                    <div className="col-md-3 offset-md-5">
                        <label>
                            <input type="text" className="form-control" onChange={this.props.emailChanged}placeholder="Enter you email"></input>
                        </label>
                        <br/>
                        <label>
                            <input type="password" className="form-control" onChange={this.props.passwordChanged}placeholder="Enter your password"></input>
                        </label>
                    </div>
                    <br/>
                    <div className="col-md-3 offset-md-5">
                        <button className="btn btn-success" onClick={this.props.checkDetails}>submit</button>
                    </div>
                    <br/>
                    <div className="col-md-3 offset-md-5">
                       {this.validate()}
                    </div>
                </div>
            </div>
           
        )
    }
}


export default App;