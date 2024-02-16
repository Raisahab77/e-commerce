import React from 'react';
import new_collection from '../../Assets/new_collections';
import Item from '../items/items';

const NewCollection = () => {
  return (
    <div className=''>
      <h1 className='text-4xl font-bold py-3'>NEW COLLECTIONS</h1>
      <hr />
      <div className='flex justify-center py-8'>
        <div className='w-4/5 flex justify-center flex-wrap gap-10'>
            {new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
      </div>
    </div>
  )
}

export default NewCollection;
