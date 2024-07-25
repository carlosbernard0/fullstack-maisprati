import { Component } from "react";

class MyComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            contador:0
        }
    }

    add = () => {
        this.setState({ contador: this.state.contador + 1})
    }

    render(){
        return(
            <div>
                <h1>Your contador is {this.state.contador}</h1>
                <button onClick={this.add}>Increment</button>
            </div>
        )
    }
}

export default MyComponent