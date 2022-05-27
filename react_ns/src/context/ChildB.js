import React from "react";
import ChildC from "./ChildC";
import { NameContext } from "./ParentContext";

class ChildB extends React.Component  {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
              ChildB component
              <br></br>
              <NameContext.Consumer>
                  {
                      (temp) => {
                          return(
                            <>
                            <div>Name is B - {temp.name}</div>
                          </>
                          )
                      }
                  }
              </NameContext.Consumer>
              <div>---------------</div>
              <ChildC/>
            </>
        )
    }
}
export default ChildB;