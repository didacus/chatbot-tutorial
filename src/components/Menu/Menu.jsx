import React from 'react'
import './Menu.css'

function Menu(props) {
    const items = props.options

    const __renderItems = items.map((item, i) => {
        return( 
        <div key={i} className="item-wrapper">
            <div className="icon"/>
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
