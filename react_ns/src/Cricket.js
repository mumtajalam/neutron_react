import React, {Component} from "react";
import CricketChild from "./CricketChild";


class Cricket extends Component{
    constructor(){
        super();
        this.state = {
            count:0
        }
        
    }
    increament = () => {
        console.log('inside increament function..');
        // this.state = {
        //     count: this.state.count + 1
        // }
        // this.forceUpdate();
        console.log(this.state.count);
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count); // old value
        console.log('increament function over..');
        // this.setState is an async method : it expects new state object as parameter, not function
    }
    render(){
        let name = "abbgshs"
        return(
            <>
                <div className="">
                    i am at NS
                </div>
                <div>
                    abcd
                </div>
                <br></br>

                <div
                > Count:-{this.state.count}
                <br></br>

                <button onClick={this.increament}>increament</button>
                </div>

                <br></br>
                <CricketChild count_temp = {this.state.count} name_temp = {name} location_temp = "BGG"/>
            </>
        )
    }
}

export default Cricket;