import React from 'react'

const Title = ({ title, desc }) => {
  return (
    <div className="my-5">
      <div className="container text-center">
        <h2 className="text-title-md md:text-title">{title}</h2>
        <p className="text-desc-md md:text-desc">{desc}</p>
      </div>
    </div>
  )
}

export default React.memo(Title)
