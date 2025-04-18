import React, { useEffect, useState } from 'react';

const imageList = [
  '/Images/pic2.png',
  '/Images/pic5.png',
  '/Images/pic3.png',
  '/Images/pic4.png'
];

function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if(isHovered){
        return;
    }
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % imageList.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval); // clean up
  }, [isHovered]);

  return (
    <div className='flex px-24 py-5'>
      <img
        src={imageList[current]}
        alt='Slideshow'
        className='w-78 h-48 transform translate-y-8 transition-all duration-700 ease-in-out hover:scale-110'
        onMouseEnter={()=>setIsHovered(true)}
        onMouseLeave={()=>setIsHovered(false)}
      />
    </div>
  );
}

export default ImageSlider;

