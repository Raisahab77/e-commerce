import React from 'react';

const Item = (props) => {
  return (
    <div className='w-[270px] h-[400px] hover:scale-110 transition-all delay-150'>
      <img className='w-full h-[300px]' src={props.image} alt="" />
      <div className='text-left'>
        <p>{props.name}</p>
        <span>${props.new_price}  </span>&nbsp;
        <span>$<s>{props.old_price}</s></span>
      </div>
    </div>
  )
}

export default Item;
