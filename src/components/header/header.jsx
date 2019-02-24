import React from "react";
import classnames from 'classnames';

import "./header.scss"

const Header = ({title, classname}) => (
    <div
        className={classnames("w3-display-container w3-opacity-min", {
            [classname]: classname
        })}>
        <div 
            className="w3-display-middle">
            <span 
                className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">
                {title}
            </span>
        </div>
    </div>
);

export default Header;