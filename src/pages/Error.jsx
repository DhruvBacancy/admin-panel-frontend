import React from "react"

const Error404 = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-48'>
      <h1 className='text-4xl font-bold text-red-600 mb-4'>
        404 - Page Not Found
      </h1>
      <p className='text-lg text-gray-800'>
        The page you are looking for does not exist or it is forbidden.
      </p>
    </div>
  )
}

export default Error404
