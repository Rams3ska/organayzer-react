import React from 'react'
import icon from '../../img/info.svg'

function ButtonInfo()
{
    return(
        <div className="button-menu" id="button-info">
            <img src={icon} className="button-icon" alt="info" />
        </div>
    )
}

export default ButtonInfo