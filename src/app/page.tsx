import React from 'react'
import Navbar from '@/components/navbar/navbar'
import Home from '@/components/Home/home'
import Core from '@/components/core/core'
import Deco from '@/components/deco/deco'
import Polaris from '@/components/Polaris/polaris'
import Work from '@/components/Work/work'
import Polygon from '@/components/polygon/polygon'
import Leadership from '@/components/leader/leader'
import ContactUs from '@/components/contact/contact'
import Footer from '@/components/footer/footer'
function page() {
  return (
    <div>
<Navbar/>
<Home/>
<Core/>
<Deco/>
<Polaris/>
<Work/>
<Polygon/>
<Leadership/>
<ContactUs/>
<Footer/>

    </div>
  )
}

export default page