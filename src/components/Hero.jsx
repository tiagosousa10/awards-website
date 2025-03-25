import React, { useRef, useState } from 'react'

// ----- main function -----
const Hero = () => {

  const [currentIndex, setCurrentIndex] = useState(1)
  const [hasClicked, setHasClicked] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [loadedVideos, setLoadedVideos] = useState(0)

  const totalVideos = 4;
  const nextVideoRef = useRef(null) // useRef to store the reference to the next video element 

  const handleVideoLoad = () => {
    setLoadedVideos((oldIndex) => oldIndex + 1)
  }

  // calculate the index of the next video, example -> 0 % 4 = 0 +1 = 1 | 1 % 4 = 1 +1 = 2
  const upcomingVideoIndex = (currentIndex % totalVideos) +1 ;

  const handleMiniVdClick = () => {
    setHasClicked(true)

    setCurrentIndex(upcomingVideoIndex)
  }


  const getVideoSrc = (index) => {
    return `videos/hero-${index}.mp4` 
  }

// ----- main jsx -----
  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
      <div id="video-frame" className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>

         <div>
            <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
              <div onClick={handleMiniVdClick} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'>
                <video
                  ref={nextVideoRef}
                  src={getVideoSrc(currentIndex + 1)}
                  loop
                  muted
                  id="current-video"
                  className='size-64 origin-center scale-150 object-cover object-center'
                  onLoadedData={handleVideoLoad}

                />
              </div>

            </div>
         </div>

      </div>
    </div>
  )
}

export default Hero
