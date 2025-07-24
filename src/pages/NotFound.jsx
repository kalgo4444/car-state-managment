import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-3 items-center justify-center">
      <h1 className="text-9xl text-red-500">404</h1>
      <Link
        className="px-3 py-2 bg-neutral-700 hover:bg-neutral-600 active:bg-neutral-600 sm:active:bg-neutral-700 rounded-border"
        to={'/'}
      >
        Go home
      </Link>
    </div>
  )
}
export default React.memo(NotFound)
