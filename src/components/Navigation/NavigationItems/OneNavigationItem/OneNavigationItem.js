import React from "react";

import './OneNavigationItem.css';

const oneNavigationItem = (props) =>(
    <li className="OneNavigationItem">
        <a href={props.link} 
        className={props.active ? 'active' : null}> 
        {props.children} </a>
    </li>
);

export default oneNavigationItem;