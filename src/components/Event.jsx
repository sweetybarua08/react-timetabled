import React from "react";

const Event = (props) => {
    return (
        <td className={`Event ${props.color}`}>
           <h5>{props.event}</h5>
           <p6>{props.location}</p6>
        </td>
    )
}

export default Event;