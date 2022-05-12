import React from "react";


class COUNT extends React.Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }
    inceament = () => {
        this.setState({count:this.state.count + 1})
    }
    render(){
        return(
            <>

            <div> count - {this.state.count}</div>
            <br></br>
            <button onClick={this.inceament}>inceament</button>
            </>
        )
    }
    
}
export default COUNT;