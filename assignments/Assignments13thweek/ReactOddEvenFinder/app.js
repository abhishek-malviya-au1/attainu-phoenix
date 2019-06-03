import React from'react';


class App extends React.Component{
    validate(){
        if(this.props.state.isOdd===true){
            return <h2>The number you entered is even</h2>
        }else if(this.props.state.isOdd===false){
            return <h2>The number you entered is Odd</h2>
        }else {
            return <h2>Please Enter a valid integer</h2>
        }
    }
    
    render(){
        return(
            
            <div className = "container">
                <div className="row">
                    <div className="col-md-3 offset-md-5" style={{marginTop : 120}}>
                        <h2>Odd || Even</h2>
                        <hr></hr>
                    </div> 
                </div>  
                <div className="row">
                    <div className="col-md-3 offset-md-5">
                        <label>
                            <input className="form-control" onChange={this.props.numberChanged}placeholder="Enter a number"></input>
                        </label>
                    </div>
                    <br/>
                    <div className="col-md-3 offset-md-5">
                        <button className="btn btn-success" onClick={this.props.checkNumber}>submit</button>
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