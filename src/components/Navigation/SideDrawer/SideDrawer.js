import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary";
import './SideDrawer.css';

const sideDrawer = (props) =>{
    let attachedClasses = ["SideDrawer", "Close"];
    if(props.open) {
        attachedClasses = ["SideDrawer", "Open"];
    }

return (
    <Aux>
        <div className={attachedClasses.join(' ')}>
            <Logo height="11%"/>
            <nav>
                <NavigationItems />
            </nav>
            <button show={props.open} onClick={props.closed}> Close </button>
        </div>
    </Aux>
)};

export default sideDrawer;