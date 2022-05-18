import React from "react";
import withFilter from "./withFilter";

const country_list = ['India', 'Nepal', 'pakistan', 'Sri Lanka', 'USA', 'UAE', 'Ukrain', 'Russia', 'Japan']

class HOC_Country extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            {country_list && country_list.map((item, index) =>(
                <div key={item + index}>{item}</div>
            ))}
            </>
        )
    }
}
export default withFilter(HOC_Country, country_list);