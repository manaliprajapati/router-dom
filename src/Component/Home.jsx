import React from 'react';
import { Link, useNavigate,useLocation } from 'react-router-dom';
function Home() {
  // const navigate=useNavigate();
  // const navToPage =()=>{
  //   let x=true;
  //   if(x){
  //     navigate('about')
  //   }
  //   else{
  //     navigate('/filter')
  //   }
  //   navigate('/about')
  // }
  const location =useLocation();
  console.log(location)

    return (
        <div>
           <h2>Home Page</h2>
           <p>This is a Home Page of our awesome app</p>
           <p>And here we are learning about Route</p>
           <Link to="/about">Go to About Page</Link><br />
           {/* <button onClick={()=> navToPage ()}>Got to about Page</button><br />
           <button  onClick={()=>navToPage()}>Go to Filter Page</button><br /> */}
        </div>
      );
}

export default Home;