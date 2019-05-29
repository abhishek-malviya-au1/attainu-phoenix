import React from 'react';
import ReactDOM from 'react-dom';




class App extends React.Component{

    constructor(props){
        super(props);

        this.state={
            n1 : 0,
            n2 : 0,
            result : 0 

        }
        this.n1Changed=this.n1Changed.bind(this);
        this.n2Changed=this.n2Changed.bind(this);
        this.add=this.add.bind(this);
        this.sub=this.sub.bind(this);
        this.mul=this.mul.bind(this);
        this.div=this.div.bind(this);

    }

    n1Changed = (event)=>{
        if(event.target.value===""){
            this.setState({n1 : " "})
        }else{
            this.setState({n1 : parseInt(event.target.value)});
        }
    }
    n2Changed = (event)=>{
        if(event.target.value===""){
            this.setState({n2 : " "})
        }else{
            this.setState({n2 : parseInt(event.target.value)});
        }
    }
    add = ()=>{
       this.setState({
           result : (this.state.n1 + this.state.n2)
       })
    }
    sub = ()=>{
        this.setState({
            result : (this.state.n1 - this.state.n2)
        })
     }
     mul = ()=>{
        this.setState({
            result : (this.state.n1 * this.state.n2)
        })
     }
     div = ()=>{
        this.setState({
            result : (this.state.n1 / this.state.n2)
        })
     }

    render(){
        return(
            <div className="container">
                <div className="row" style={{marginTop : 120 }}>
                    <div className="col-md-5 offset-md-3">
                        <h2>React Arithmetic Calculator</h2>
                        <hr/>
                        <label for="n1" style={{marginRight : 10 }}> Enter first Number<p></p>
                            <input onChange={this.n1Changed} type="text" name="n1" style={{marginRight : 10}}/>
                        </label>
                        <label for="n2"> Enter second Number<p></p>
                            <input onChange={this.n2Changed} type="text" name="n2" />
                        </label>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 offset-md-3">
                        <button className="btn btn-info" onClick={this.add} style={{marginRight : 10}} >Addition</button>
                        <button className="btn btn-info" onClick={this.sub} style={{marginRight : 10}}>Substraction</button>
                        <button className="btn btn-info" onClick={this.mul} style={{marginRight : 10}}>Multiplication</button>
                        <button className="btn btn-info" onClick={this.div} style={{marginRight : 10}}>Division</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 offset-md-3">
                        <hr />
                        <h3>{this.state.result}</h3>
                        <hr />
                    </div>
                </div>
            </div>
        );


    }


}





ReactDOM.render(<App />, document.getElementById('root'));

