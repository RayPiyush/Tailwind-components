import React, { useState } from 'react'
import { Home, ChevronRight } from 'lucide-react';
import ImageSlider from './ImageSlider';
function Body() {
  const [homeopen, setHomeopen] = useState(false);
  return (
    <div className='flex justify-between min-h-58'>
      <div className='flex flex-col justify-start px-3'>
        <button onClick={() => setHomeopen(prev => !prev)} className='transform -translate-y-1 pl-px-4'>
          <div className='flex items-center gap-2 hover:text-violet-400'>
            <Home />
            {!homeopen && <span>Home</span>}
            {homeopen &&
              <div className='flex items-center gap-1'>
                <ChevronRight />
                <span>Online Programs</span>
              </div>
            }
          </div>
        </button>
        {homeopen ? (
          <div className='flex flex-col transform translate-x-15 translate-y-12 max-w-2xl'>
            <div className=''>
              <h2 className='font-bold'>Online Programs</h2>
            </div>
            <div >
              <p className='text-justify'>Our Online Programs are thoughtfully designed to bring the excellence of
               ALLEN’s classroom learning right to your fingertips. With expert faculty, 
               structured study plans, and interactive sessions, students can now access 
               top-quality education from the comfort of their homes. Whether you're
                preparing for school exams, JEE, NEET, or Olympiads, our programs offer 
                personalized guidance and doubt-solving to ensure every student thrives.
                 Learn at your own pace with recorded lectures and stay on track with live
                sessions, quizzes, and assignments. Join thousands of learners across the country who trust ALLEN for their academic success. Your journey to excellence starts here!</p>
            </div>
          </div>
        ) :
          (
            <div className='transform translate-x-15 translate-y-12 max-w-2xl'>
            <div className='text-3xl font-semibold'>
              <h2>Get up to 90% scholarship on ALLEN Courses</h2>
              <h4 className='py-6 px-22 text-2xl'>Register for scholarship</h4>
              
            </div>
            <div className='flex'>
                <button className='bg-violet-500 px-18 py-5 rounded-full hover:bg-violet-900 hover:text-white'>Online Course</button>
                <button className='bg-violet-500 px-18 py-5 rounded-full hover:bg-violet-900 hover:text-white'>Offline Course</button>
              </div>
            </div>
          )}
      </div>
      <div className='flex pl-px-16 py-5'>
        {/* <img src='/Images/pic1.png' className='w-58 h-48 transform translate-y-8 rounded-full'></img> */}
        <ImageSlider/>
      </div>
    </div>
  )
}

export default Body
