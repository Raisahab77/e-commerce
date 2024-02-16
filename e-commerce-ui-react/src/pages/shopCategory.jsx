import React from 'react';
import all_product from '../Assets/all_product';
import Item from '../component/items/items';

const ShopCategory = (props) => {

  console.log(props);
  let productData = productByCategory(props);

  return (
    <div className=''>
      <img src={props.banner} alt="" />
      <hr />
      <div className='flex justify-center py-8'>
        <div className='w-4/5 flex justify-center flex-wrap gap-10'>
            {
                productData.map((item,i)=>{
                  return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })
            }
        </div>
      </div>
    </div>
  )
}


function productByCategory (propsData){
  let product_data = all_product.filter(data=>data.category === propsData.category);
  return product_data;
}

export default ShopCategory;
