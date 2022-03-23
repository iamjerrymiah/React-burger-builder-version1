import React from "react";

import OneNavigationItem from "./OneNavigationItem/OneNavigationItem";
import './NavigationItems.css'

const navigationItems = (props) => (
    <ul className="NavigationItems">
        <OneNavigationItem link="/" active> Burger Builder </OneNavigationItem>
        <OneNavigationItem link="/"> Checkout </OneNavigationItem>
    </ul>
);

export default navigationItems;