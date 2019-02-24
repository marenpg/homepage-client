import React from 'react';

import Header from '../components/header/header.jsx'

const StartPage = () => (
    <div>
        <Header 
            title="MAREN PARNAS GULNES"
            classname="bgimg-1" 
        />
        <div className="w3-content w3-container w3-padding-64">
            <h3 className="w3-center">ABOUT ME</h3>
            <p>
                Here, a lovely text about me will arrive. Until then; 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    </div>
);

export default StartPage;