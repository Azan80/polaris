import React from 'react'
import Navbar from '@/components/navbar/navbar'
import Home from '@/components/Home/home'
import Deco from '@/components/deco/deco'
import Polaris from '@/components/Polaris/polaris'
import Work from '@/components/Work/work'
import Polygon from '@/components/polygon/polygon'
import Leadership from '@/components/leader/leader'
function page() {
  return (
    <div>
<Navbar/>
<Home/>
<Deco/>
<Polaris/>
<Work/>
<Polygon/>
<Leadership/>
    </div>
  )
}

export default page