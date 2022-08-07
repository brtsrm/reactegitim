import React from 'react'


const Collapse = (props) => {
    return (
        <div style={{padding:"10px"}}>
            <a className="btn btn-primary" data-toggle="collapse" href={"#".concat(props.href)} aria-expanded="false" aria-controls={props.href}>
                Show
            </a>
            <div className="collapse" id={props.href}>
                {props.children}
            </div>
        </div>
    )
}

export default Collapse