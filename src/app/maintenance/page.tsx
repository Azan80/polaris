import React from 'react'
import Navbar from '@/components/navbar/navbar'
import Image from '@/components/mainimage/image'
import Expertise from '@/components/expertise/expertise'
import Mainbenefit from '@/components/mainbenefit/mainbenefit'
import Card from '@/components/maincard/card'
import Ready from '@/components/mainready/ready'
import ContactUs from '@/components/contact/contact'
import Footer from '@/components/footer/footer'
function page() {
  return (
    <div>
        <Navbar />
        <Image/>
        <Expertise/>
        <Mainbenefit/>
        <Card/>
        <Ready/>
        <ContactUs/>
        <Footer/>

      
    </div>
  )
}

export default page
