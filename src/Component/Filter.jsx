import React from 'react';
import { useSearchParams } from 'react-router-dom';
function Filter() {
    const {searchParams,setSearchParams}=useSearchParams();
    console.warn(searchParams.get('age'))   
    return ( 
        <div>
            <h2>Filter Page</h2>
        </div>
     );
}

export default Filter;