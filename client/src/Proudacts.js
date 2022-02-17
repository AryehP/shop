import React, {useContext} from 'react';
import {cartCount} from './App';
import Proudact from './Proudact';

function Proudacts({proudacts,category}) {

  const { items } = useContext(cartCount);
  const quantity = items[proudacts.id] ?? 0;

  return (
    <div className='proudact'>

          {
            proudacts.filter(proudact => {

              const isInCategory = category === 'all' || proudact.category === category;
              return isInCategory;

            })
            .map(product => {
              return (
                <Proudact key={product.id} {...product} />
              );
            })}
          

    </div>);
}

export default Proudacts;
