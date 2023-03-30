import React,{useState} from 'react';
function Favoritefood() {
    const [food,setFood]=useState("pizza");
    function handleChangeFood()
    return ( 
        <div>
            <input type="text"/>
            <h1>My Favorite Food is {food}!</h1>
        </div>
     );
}

export default Favoritefood;