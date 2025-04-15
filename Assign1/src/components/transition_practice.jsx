import React from 'react'

function transition_practice() {
  return (
    <div className='flex w-screen h-screen bg-amber-100'>
        <div className='transition-all duration-1000 delay-175 hidden md:block p-5 flex-1/4 max-h-screen bg-red-400'>
            <h1>SideBar</h1>
        </div>
        <div className='p-5 flex-3/4 justify-center max-h-screen bg-green-400'>
            <h1>Content</h1>
        </div>
    </div>
  )
}

export default transition_practice
