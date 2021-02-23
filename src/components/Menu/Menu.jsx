import React from 'react'

import './Menu.css'
// import BadgeIc from "../../assets/ic-badge.png";

function Menu(props) {
    const items = props.options

    const __renderItems = items.map((item, i) => {
        return( 
        <div key={i} className="item-wrapper" onClick={item.handler}>
            <img alt="icon" src={item.icon} className="icon"/>
            <li className="item">{item.text}</li>
        </div>
        )
    })
  
    return (
        <div className="menu-wrapper">
            <ul className="menu">
                {__renderItems}
            </ul>
        </div>
    )
}

export default React.memo(Menu)
