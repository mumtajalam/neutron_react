import React from "react";


const withFilter = (InputComponent, data) => {

    class OutputComponent extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                tempinput:'',
                orglist: data,
                filterlist: data,

            }
        }

        filterFn = (event) => {
            console.log('inside filter fn....', event.target.value);
            let tempArr = this.state.orglist.filter((item) =>{
                return item.indexof(event.target.value) >= 0;
            });
            this.setState({
                filterlist: tempArr,
                tempinput: event.target.value,
                orglist: this.state.orglist,
            })
        }
        render(){
            return(
                <>
                <br></br>
                <input type="text" onChange={(e) => this.filterFn(e)}/>
                <InputComponent list = {this.state.filterlist}/>
                </>      
            )          
        } 
    }
    return OutputComponent;
    
}
export default withFilter;