import React from "react";
import ReactDOM from "react-dom";

class NewButton extends React.Component {
    render () {
        return <button>First React Component</button>
    }
}

let root=document.getElementById("root");
ReactDOM.render(<NewButton/>, root)