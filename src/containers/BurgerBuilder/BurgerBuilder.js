import React, { Component } from 'react';

import Aux from './../../hoc/Auxiliary';
import Burger from './../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese:0,
            meat: 0
        },
        totalPrice: 5,   //default price
        purchasable: false,
        purchasing: false
    }


    updatePurchaseState (ingredients){
        //turning ingredients into an Array and fetch the value of each object[meat: 0]
        const sum = Object.keys(ingredients)
        .map(igKey =>{
            return ingredients[igKey]
        })
        .reduce((sum, el) =>{
            return sum + el;
        }, 0);

        this.setState({purchasable: sum > 0});
    };


    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type]; //getin the current state
        const updatedCount = oldCount + 1;

        const updatedIngredients = {...this.state.ingredients}; //spreading out the state
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type]; //individual price for the type[meat, bacon e.t.c]
        const oldPrice = this.state.totalPrice; //getting the total price from the state
        const newPrice = oldPrice + priceAddition; 

        //updating the changed state
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});

        this.updatePurchaseState(updatedIngredients); // calling the function to enable button once there is ingredient
    }


    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type]; //getin the current state
        if(oldCount <= 0){ //to return nothing when the ingredients is 0
            return;
        }
        const updatedCount = oldCount - 1;

        const updatedIngredients = {...this.state.ingredients}; //spreading out the state
        updatedIngredients[type] = updatedCount;

        const priceDeduction = INGREDIENT_PRICES[type]; 
        const oldPrice = this.state.totalPrice; 
        const newPrice = oldPrice - priceDeduction; 

        //updating the changed state
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});

        this.updatePurchaseState(updatedIngredients);
    };

    purchaseHandler = () =>{
        this.setState({purchasing: true});
    };

    purchaseCancelHandler = () =>{
        this.setState({purchasing: false})
    };

    purchaseContinueHandler = () =>{
        alert('You Continue!');
    };



    render(){
        //in my opinion, you can ignore the disabledInfo functionality[its just for ref purpose]
        //spreading the ingredient state
        const disabledInfo = {
            ...this.state.ingredients
        };
        //looping thru state with a key
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0 //works when the ingredient is less than 0 
        }
        //[meat: true, bacon:false, ...]

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                    cancel={this.purchaseCancelHandler}
                    continue={this.purchaseContinueHandler} 
                    ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                purchasable={this.state.purchasable}
                price={this.state.totalPrice}
                ordered={this.purchaseHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;