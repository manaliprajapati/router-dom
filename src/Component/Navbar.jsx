import React,{Link, NavLink} from 'react-router-dom';
function Navbar() {
    return (
        <div>
           <ul className='navbar'>
            {/* <li>  <Link to="/">Home</Link></li>
            <li> <Link to="/about">About</Link></li> */}
            <li><NavLink
            style={(isActive)=>{return  {color: isActive ?'skyblue' :''}}} className="navbar-link" to='/'>Home</NavLink></li>
            <li>< NavLink
              style={(isActive)=>{return  {color:isActive?'skyblue' :''}}}   className="navbar-link" to='/about'>About</NavLink></li>
            <li><NavLink 
              style={(isActive)=>{return  {color:isActive?'skyblue' :''}}}  className="navbar-link" to='/contact'>Contact</NavLink></li>
                 <li><NavLink 
              style={(isActive)=>{return  {color:isActive?'skyblue' :''}}}  className="navbar-link" to='/login'>Login</NavLink></li>
               {/* <li><NavLink 
              style={(isActive)=>{return  {color:isActive?'skyblue' :''}}}  className="navbar-link" to='/filter'>Filter</NavLink></li> */}
           
           </ul>
        </div>
      );
}

export default Navbar;