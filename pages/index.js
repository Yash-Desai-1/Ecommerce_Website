import React from 'react'
import {client} from '../lib/client';
import {HeroBanner,Navbar,Product,FooterBanner, Footer} from '../components'
const Home = ({products,bannerData}) => {
  return (
   <>
   <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
   <div className="products-heading">
    <h2>Best Selling Product</h2>
    <p>Speaker of many variations</p>
   </div>
   <div className='products-container'>
    {products?.map((product)=><Product key={product._id} product={product}/>
    )}
   </div>
   <FooterBanner footerBanner={bannerData && bannerData[0]}/>
   </>
  )
}


//server side request in next 
export const getServerSideProps= async()=>{
  // await dbConnect();
//  to fetch from product
  const query='*[_type == "product"]'
const products = await client.fetch(query)
//to fetch from banner
const bannerQuery='*[_type=="banner"]'
const bannerData = await client.fetch(bannerQuery)
//
return {
  props:{products,bannerData},
}
}
export default Home