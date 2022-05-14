import React, {createRef} from "react";


class RefClass extends React.Component {
    constructor(){
        super(); 
        this.inputRef1 = createRef();
        this.inputRef2 = createRef();
        this.outRef1 = createRef();
    }

    handleSubmit = () => {
        console.log('handle submit trigeered...');
        console.log(this.inputRef1.current.value);
        console.log(this.inputRef2.current.value);
        this.outRef1.current.innerHTML = this.inputRef1.current.value + this.inputRef2.current.value;
    }
    render(){
        return(
            <>
            <br></br>
            <div><h2>Login Form</h2></div>
            <br></br>
            <input type="text" ref={this.inputRef1}/>
            <br></br>
            <input type="password" ref={this.inputRef2}/>
            <br></br>
            <button onClick={this.handleSubmit}>Login</button>
            <br></br>

            <div ref={this.outRef1}></div>
            <br></br>

            </>
        )
    }
}
export default RefClass;