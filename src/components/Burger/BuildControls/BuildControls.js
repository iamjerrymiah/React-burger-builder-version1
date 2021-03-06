import React from "react";
import './BuildControls.css';
import InnerBuildControl from "./InnerBuildControl/InnerBuildControl";

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]
//toFixed(2) is a function that accepts only numbers, to fix a decimal to 2 decimal places

const buildControls = ( props ) =>(
    <div className="BuildControls">
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p> 
        {controls.map(ctrl =>(
            <InnerBuildControl 
            key={ctrl.label} 
            label={ctrl.label} 
            added={()=> props.ingredientAdded(ctrl.type)}
            removed={()=> props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button className="OrderButton" disabled={!props.purchasable} onClick={props.ordered}>ORDER NOW</button>
    </div>
)

export default buildControls;