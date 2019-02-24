
import React from 'react';

const Navbar = ({links, ...rest}) => (
    <div className="w3-top">
        <div className="w3-bar" id="nav-bar">
            {links.map((link, i) =>
                <div key={i} index={i} >
                    <a href={link.url} className={link.className}>{link.heading}</a>
                </div>
            )}
        </div>
  </div>
);

export default Navbar;