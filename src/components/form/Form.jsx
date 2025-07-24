import React, { useRef } from 'react'
import { useStore } from '../../store/useStore'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Form = () => {
  const imgRef = useRef(null)
  const nameRef = useRef(null)
  const priceRef = useRef(null)
  const { getInfo } = useStore()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const img = imgRef.current.value
    const name = nameRef.current.value
    const price = priceRef.current.value

    const info = {
      id: new Date().getTime(),
      img,
      name,
      price,
    }
    getInfo(info)
    imgRef.current.value = ''
    nameRef.current.value = ''
    priceRef.current.value = ''
    navigate('/')
    toast.success(`${name} is added`, {
      duration: 1000,
    })
  }

  return (
    <div className="my-6">
      <div className="container">
        <form
          onSubmit={handleSubmit}
          className="max-w-xl w-full mx-auto bg-form rounded-border p-4"
        >
          <input
            autoFocus
            ref={imgRef}
            className="w-full my-3.5 h-14 text-xl indent-5 outline-0 border border-gray-500 hover:border-main focus:border-main duration-300  rounded-border"
            type="text"
            placeholder="Enter URL image"
            required
          />
          <input
            ref={nameRef}
            className="w-full my-3.5 h-14 text-xl indent-5 outline-0 border border-gray-500 hover:border-main focus:border-main duration-300  rounded-border"
            type="text"
            placeholder="Enter name"
            required
          />
          <input
            ref={priceRef}
            className="w-full my-3.5 h-14 text-xl indent-5 outline-0 border border-gray-500 hover:border-main focus:border-main duration-300  rounded-border"
            type="number"
            placeholder="Enter price"
            required
          />
          <div className="flex max-md:flex-col gap-4 items-center">
            <button
              className="w-4/5 md:w-1/2 mt-2 md:my-3.5 h-14 text-xl indent-5 outline-0 border border-gray-500 hover:border-main active:bg-neutral-700 duration-300  rounded-border"
              type="submit"
            >
              Submit
            </button>
            <Link
              to={-1}
              className="w-4/5 md:w-1/2 mt-2 md:my-3.5 h-14 text-xl indent-5 outline-0 border border-gray-500 hover:border-main active:bg-neutral-700 duration-300 rounded-border flex items-center justify-center"
            >
              Go Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default React.memo(Form)
