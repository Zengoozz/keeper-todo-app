import React from "react";
// import {hoverOn,hoverOut} from '../service'


function Heading(props) {
    return (
        <div className="nav-bar">
            <p className="brand-name font-effect-anaglyph">
                Keeper
            </p>

            {props.isLogged ?
                <div className="access-form">
                    <button
                        onClick={props.switchFn}>
                        Logout
                    </button>
                </div> :
                <div className="access-form">
                    <button
                        onClick={props.switchFn}>
                        Login
                    </button>
                    <button
                        onClick={props.switchFn}>
                        Signup
                    </button>
                </div>}
        </div>
    );
}

export default Heading;