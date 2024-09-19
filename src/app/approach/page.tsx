import React from 'react'
import Navbar from '@/components/navbar/navbar'
import Approachimage from '@/components/approachimage/approachimage'
import Grid from "@/components/grid/grid"
import Ourapproach from '@/components/ourapproach/ourapproach'
import Piller from '@/components/piller/piller'
import ContactUs from '@/components/contact/contact'
import Footer from '@/components/footer/footer'
function page() {
  return (
    <div>
     <Navbar/>
     <Approachimage/>
       <Grid/> 
      <Ourapproach/> 
      <Piller/>
     <ContactUs/>
<Footer/>     

     
    </div>
  )
}

export default page
