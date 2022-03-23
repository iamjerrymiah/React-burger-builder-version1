import React from "react";
import Aux from "../../../hoc/Auxiliary";
//import Button from "../../UI/Button/Button";

const orderSummary = ( props ) => {
    //transforming the state object to an Array and mapping to get both key and value frm the object 
    const ingredientSummary = Object.keys(props.ingredients)
    .map(
        igKey => {
            return <li key={igKey}><span>{igKey}: </span> {props.ingredients[igKey]}</li>
        }
    )

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
            <button onClick={props.cancel}>CANCLE</button>
            <button onClick={props.continue}>CONTINUE</button>
        </Aux>
)}

export default orderSummary;