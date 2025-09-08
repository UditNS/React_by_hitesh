import React from 'react'
// Container is a layout utility component. Its main job is to wrap your content in a consistent width and alignment, so you don’t repeat the same Tailwind classes everywhere.
function Container({children}) {
  return (
    <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>
  )
}

export default Container