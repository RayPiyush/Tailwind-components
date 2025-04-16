import React from 'react'

function Navbar() {
  return (
      <div className='header min-h-10 bg-violet-800 flex '>
          <div className='flex py-4 px-4 justify-center justify-items-center gap-8'>
              <div>Allen</div>
              <div>Courses</div>
              <div>Test Series</div>
              <div>Results</div>
              <div>Study Material</div>
          </div>
          <div className='flex py-4 px-4 justify-end justify-items-end gap-4'>
                <div>Call</div>
                <div>LogIn</div>
          </div>

      </div>
  )
}

export default Navbar
