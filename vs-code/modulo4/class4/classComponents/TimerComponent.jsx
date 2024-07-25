import { Component } from 'react'

class TimerComponent extends Component{
    constructor(props){
        super(props);
        this.state = { 
            count: 0
        }
    }

    componentDidMount(){
        this.timerID = setInterval(()=>{
            this.setState((prevState)=>({
                count: prevState.count + 1,
            }));
        
        },1000);
    }

    componentDidUpdate(){
        console.log(`Update to ${this.state.count}`)
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
        console.log("Timer clear up")
    }

    render(){
        return(
            <h1>
                {this.state.count}
            </h1>
        )
    }
}

export default TimerComponent