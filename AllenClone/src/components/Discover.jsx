import React from 'react'
import {ChevronRight} from 'lucide-react';
function Discover() {
  return (
      <div className='flex flex-col items-center justify-between px-10 py-6 bg-violet-800'>
          <div className='flex  px-5 py-4'>
                <h4 className='text-xl font-semibold'>Discover The Courses</h4>
          </div>
          <div className='flex items-center justify-between w-full max-w-5xl gap-6'>
              <div className='flex w-64 h-40 bg-violet-600 hover:bg-violet-500 shadow-md rounded-lg relative p-3'>
                  {/* //left Side  */}
                  <div className=' flex flex-col justify-between'>
                    <p className='px-2 py-2 font-bold'>JEE</p>
                    <button className='flex items-end px-2 py-2 hover:underline'>
                        <span>View</span>
                        <ChevronRight/>
                    </button>
                  </div>
                  {/* //right side */}
                  <div className='flex items-end justify-end '>
                    <img className='h-24 w-24 object-contain absolute bottom-2 right-2' src='/Images/Jee.png'/>
                  </div>
              </div>
              {/* box-2 */}
              <div className='flex w-64 h-40 bg-violet-600 hover:bg-violet-500 shadow-md rounded-lg relative p-3'>
                  {/* //left Side  */}
                  <div className=' flex flex-col justify-between'>
                    <p className='px-2 py-2 font-bold'>NEET</p>
                    <button className='flex items-end px-2 py-2 hover:underline'>
                        <span>View</span>
                        <ChevronRight/>
                    </button>
                  </div>
                  {/* //right side */}
                  <div className='flex items-end justify-end '>
                    <img className='h-24 w-24 object-contain absolute bottom-2 right-2' src='/Images/Neet.png'/>
                  </div>
              </div>
              {/* box-3 */}
              <div className='flex w-64 h-40 bg-violet-600 hover:bg-violet-500 shadow-md rounded-lg relative p-3'>
                  {/* //left Side  */}
                  <div className=' flex flex-col justify-between'>
                    <p className='px-2 py-2 font-bold'>Class 6-10</p>
                    <button className='flex items-end px-2 py-2 hover:underline'>
                        <span>View</span>
                        <ChevronRight/>
                    </button>
                  </div>
                  {/* //right side */}
                  <div className='flex items-end justify-end '>
                    <img className='h-24 w-24 object-contain absolute bottom-2 right-2' src='/Images/class6-10.png'/>
                  </div>
              </div>
          </div>
      </div>

  )
}

export default Discover
