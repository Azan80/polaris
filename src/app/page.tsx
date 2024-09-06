import React from 'react'
import Navbar from '@/components/navbar/navbar'
import Home from '@/components/Home/home'
import Deco from '@/components/deco/deco'
import Polaris from '@/components/Polaris/polaris'
import Work from '@/components/Work/work'
function page() {
  return (
    <div>
<Navbar/>
<Home/>
<Deco/>
<Polaris/>
<Work/>
    </div>
  )
}

export default page