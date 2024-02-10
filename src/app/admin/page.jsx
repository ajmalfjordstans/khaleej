'use client'

import React, { useState } from 'react'
import Navbar from './navbar'
import SideMenu from './side-menu'
import Booking from './booking'
import Enquiries from './enquiries'
import Login from './login'

export default function Page() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [showSection, setShowSection] = useState('booking')
  return (
    <div>
      {loggedIn ?
        (
          <>
            <Navbar setShowSection={setShowSection} showSection={showSection}/>
            <div className='flex h-[90dvh]'>
              <div className='hidden md:block'>
                <SideMenu setShowSection={setShowSection} showSection={showSection} />
              </div>
              <div className='w-full'>
                {showSection === 'booking' ?
                  <Booking />
                  :
                  <Enquiries />
                }
              </div>
            </div>
          </>
        )
        :
        <Login setLoggedIn={setLoggedIn} />
      }
    </div>
  )
}
