import React from "react";

const Icon = ({icon, title}) => {
    return (
        <div className='icon-container'>
            <i>{icon}</i>
            <h3>{title}</h3>
        </div>
    )
}

export default Icon;