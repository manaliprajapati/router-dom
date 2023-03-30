import React from 'react';
import { Link } from 'react-router-dom';
function Pafe404() {
    return ( 
    <div>
        <h1>404 Page Not Found </h1>
        <p>This is URL is not present</p>
        <Link to="/">Go to Home Page</Link>
    </div>
     );
}

export default Pafe404
;