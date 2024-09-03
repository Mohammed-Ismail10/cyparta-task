import React from 'react'
import Sidebarr from '../_components/sidbar/page.jsx'

export default function layout({ children }) {
  return (
    <>
      <section className='w-11/12 mx-auto  my-3 flex'>
        <Sidebarr />
        <div className='w-full'>
          {children}
        </div>
      </section>
    </>
  )
}
