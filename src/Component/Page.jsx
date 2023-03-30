import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
function Page() {
    return ( 
        <div>
            <Router>
                <Link to="/">Home Page</Link>
                <Link to="/about">About Page</Link>
                <Route path='/'><House /></Route>
                <Route path="about"><Fun /></Route>
            </Router>
        </div>
     );
}
function House(){
    return(
        <div>
            <h2>Home Page</h2>
            <p>This is home page of website</p>
        </div>
    );
}
function Fun(){
    return(
        <div>
            <h2>About Page</h2>
            <p>This is about page of website</p>
        </div>
    );
}
export default Page;