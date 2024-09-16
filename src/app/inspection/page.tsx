import React from 'react'
import Navbar from '@/components/navbar/navbar'
import Image from '@/components/inspectionimage/image'
import Challenge from '@/components/challenge/challenge'
import Benefits from '@/components/benefits/benefits'
import Card from '@/components/approachcard/card'
import Ready from '@/components/ready/ready'
import ContactUs from '@/components/contact/contact'
import Footer from '@/components/footer/footer'
function page() {
  return (
    <div>
        <Navbar />
        <Image />
        <Challenge />
        <Benefits />
        <Card />
        <Ready />
        <ContactUs />
        <Footer />
    </div>
  )
}

export default page
