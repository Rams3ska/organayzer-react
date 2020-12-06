import React from 'react';

function ButtonMenu({ style, icon, action, maClass }) {
  return (
    <div className={`button-menu + ${maClass}`}>
      <img src={icon} className="button-icon" style={style} alt="button" />
    </div>
  );
}

export default ButtonMenu;
