import React from 'react'
import icon from '../../img/gear.svg'

function ButtonSettings()
{
    return(
        <div className="button-menu" id="button-settings">
            <img src={icon} className="button-icon" alt="settings" />
        </div>
    )
}

export default ButtonSettings