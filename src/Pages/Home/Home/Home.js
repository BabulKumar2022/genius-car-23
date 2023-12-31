import React from 'react'
import  Services  from '../Services/Services'
import Experts from '../Experts/Experts'
import Banner from '../Banner/Banner'
import { Helmet } from 'react-helmet-async'



const Home = () => {
  return (
    <div>
      <Helmet><title>Home</title> </Helmet>
        <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
     </div>
  )
}

export default Home