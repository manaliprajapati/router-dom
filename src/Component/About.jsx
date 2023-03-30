import React from 'react';
import { Link } from 'react-router-dom';
function About() {
    return (  
        <div>
            <h2>About Page</h2>
            <p>This is  About Page of our awesome app</p>
           <p>And here we are learning about Route</p>
           <Link to="/">Go to Filter page</Link>
           <li><a href='/user/manali' state={{name:"manali prajapati", age:"22"}}>Manali</a></li>
            <li><a href='/user/yatvik'>Yatvik</a></li>
        </div>
    );
}

export default About;
<div>
    <h2>About Page</h2>
</div>