import React from "react";
import Son from "./Son";

export default props => {
    return (
        <div>
            <Son name='João' surname={props.surname}/>
            <Son name='Bento' surname='direto'/>
            <Son name='Matheus' {...props}/>
        </div>
    )
}