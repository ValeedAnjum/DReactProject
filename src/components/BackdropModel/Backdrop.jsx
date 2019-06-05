import React from 'react'
import Back from './Back/Back';
import Datacontainer from './Datacontainer/Datacontainer';
export default function Backdrop(props) {
    return (
        <React.Fragment>
            <Back backdropclickHandler={props.backdropclickHandler} />
            <Datacontainer child={props.children}/>
        </React.Fragment>
    )
}
