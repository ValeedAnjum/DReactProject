import React from 'react';
import './Datacontainer.css';
export default function Datacontainer(props) {
    return (
        <React.Fragment>
            <div className="Datacontainer">
                {props.child}
            </div>
        </React.Fragment>
    )
}
