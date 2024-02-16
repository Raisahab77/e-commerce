import React from 'react'
import Hero from "../component/hero/hero";
import Popular from '../component/popular/popular';
import Offers from '../component/offers/offers';
import NewCollection from '../component/newCollection/newCollection';
import NewsLetter from '../component/newsLetter/newsLetter';
const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
