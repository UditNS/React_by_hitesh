import React from 'react'

function Button({
    children,
    type = "button",
    bgColor = 'bg-green-500',
    textColor = 'white',
    className = '',
    ...props
    }) {
  return (
    <button className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`} {...props}>
        {children}{/* //text which was passed from outside */}
    </button>
  )
}

export default Button