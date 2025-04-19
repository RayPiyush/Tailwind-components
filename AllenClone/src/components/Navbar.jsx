import React from 'react'
import { PhoneCall,NotebookPen } from 'lucide-react';
function Navbar() {
    return (
        <div className='header min-h-10 bg-violet-800 flex justify-between items-center '>
            <div className='flex py-4 px-4 gap-8'>
                <div className='flex items-center gap-2 py-3 px-6 bg-purple-600'>
                    <span className='text-white text-3xl' >ALLEN</span>
                    <NotebookPen/>
                </div>
                <div className='flex items-center'>
                    <a href='courses.allen.in' className='text-white py-3 px-2  text-xl hover:text-violet-400'>Courses</a>
                </div>
                <div className='flex items-center'>
                    <a href='courses.allen.in' className='text-white py-3 px-2  text-xl hover:text-violet-400'>Exams</a>
                </div>
                <div className='flex items-center'>
                    <a href='courses.allen.in' className='text-white py-3 px-2  text-xl hover:text-violet-400'>Results</a>
                </div>
                <div className='flex items-center'>
                    <a href='courses.allen.in' className='text-white py-3 px-2  text-xl hover:text-violet-400'>Study Material</a>
                </div>
            </div>
            <div className='flex py-4 px-4 gap-4'>
                <div className='flex'>
                    <button className='flex items-center gap-2 bg-slate-50  hover:bg-violet-700 hover:text-white text-black rounded-full px-6 py-3 '>
                        <PhoneCall className="w-5 h-5" />
                        <span>Talk to Us</span>
                    </button>
                </div>
                <div>
                    <button className='flex items-center px-4 py-3 rounded-full bg-violet-900 hover:bg-violet-400 text-white'>LogIn</button>
                </div>
            </div>

        </div>
    )
}

export default Navbar
