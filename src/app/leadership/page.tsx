import React from 'react'
import Navbar from '@/components/navbar/navbar'
import Leaderimage from '@/components/leaderimage/leaderimage'
import Wes from '@/components/wes/wes'
import Sason from '@/components/saxon/saxon'
import ContactUs from '@/components/contact/contact'
import Footer from '@/components/footer/footer'
function page() {
  return (
    <div>
        <Navbar />
        <Leaderimage/>
        <Wes />
        <Sason />
        <ContactUs />
        <Footer/>


      
    </div>
  )
}

export default page
