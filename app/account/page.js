import React from 'react'
import { auth } from '../_lib/auth'

export const metadata = {
  title: "Guest Area"
}

const page = async () => {
  const session = await auth();
  console.log(session)
  return (
    <h2 className='font-semibold text-2xl text-accent-400 mb-7'>
      Welcome, {session?.user?.name} 
    </h2>
  )
}

export default page
