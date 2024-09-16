import React from 'react'
import Navbar from '@/components/navbar/navbar'
import Deco from '@/components/decoimage/image'
import Commit from '@/components/commit/commit'
import  Decobenefit from '@/components/decobenefit/benefit'
import Decocard from '@/components/decocard/card'
import Ready from '@/components/decoready/ready'
import ContactUs from '@/components/contact/contact'
import Footer from '@/components/footer/footer'
function page() {
  return (
    <div>
        <Navbar />
        <Deco />
        <Commit />
        <Decobenefit />
        <Decocard />
        <Ready />
        <ContactUs />
        <Footer />
      
    </div>
  )
}

export default page
