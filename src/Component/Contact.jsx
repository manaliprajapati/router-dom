import React from 'react';
import {Link, Outlet} from 'react-router-dom'
function Contact() {
    return ( 
        <div>
            <h2>Contact us Page</h2>
            <h3>here we have some other buisness</h3>
            <Link to="/company">Company</Link>
            <Link to="/channel">Channel</Link>
            <Link to="/other">Other</Link>
           <Outlet />
        </div>
     );
}

export default Contact;