import React from 'react';

function Proudact({id,title,image,price,description,category}) {
  return (
    <div className='proudact'>

      <div className='imageContainer'>
          <img className='image' src={image} />
        </div>
        <label className='category'>{category}</label>
        <h3>{title}</h3>
        <p>{description}</p>
        <button>{price}</button>

  </div>);
}

export default Proudact;
