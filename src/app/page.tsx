import React from 'react'
import { PageHeader } from './components/PageHeader'

const page = () => {
  return (
    <div className='w-full h-full flex justify bg-center items-center relative bg-peach'>
      <div className='max-w-screen-lg w-full h-full flex relative'>
        <PageHeader />
        <div className='fixed w-full h-1080px'>Home</div>
        <div>About</div>
        <div>Outlets</div>
        <div>Footer</div>
      </div>
    </div>
  )
}

export default page