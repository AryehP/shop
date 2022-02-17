import React from 'react';
import Dropdown from 'react-dropdown';
import {useEffect, useState} from 'react';


function Categoris({currentCategory = 'all', onChange}) {

  const [categories, setCategories] = useState([]);

  useEffect(() => {

    fetch('/api/categories')
     .then(response => response.json())
     .then(data => setCategories(['all', ...data]));

  } ,[])

  return (<div className='category'>

    {categories.map(category => {
      const categoryName = category;
      return(
        <button key={category}
        onClick={() => onChange(category)}>
          {categoryName}
          </button>
      );
    })}
      
  </div>);
}
export default Categoris;
