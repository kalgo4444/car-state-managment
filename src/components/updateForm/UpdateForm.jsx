import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useStore } from '../../store/useStore'
import toast from 'react-hot-toast'

const UpdateForm = () => {
  const { id } = useParams()
  const { cars } = useStore()
  const navigation = useNavigate()
  const info = cars.filter((item) => item.id == id)
  const [idCard, setIdCard] = useState(info[0]?.id)
  const [img, setImg] = useState(info[0]?.img)
  const [name, setName] = useState(info[0]?.name)
  const [price, setPrice] = useState(info[0]?.price)

  const handleSubmit = (e) => {
    e.preventDefault()
    navigation('/')
    toast.success(`${name} is updated`, {
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
          <label htmlFor="id">ID</label>
          <input
            value={idCard}
            onChange={(e) => setIdCard(e.target.value)}
            className="w-full my-3.5 h-14 text-xl indent-5 outline-0 border border-gray-500 hover:border-main focus:border-main duration-300  rounded-border"
            type="text"
            placeholder="Enter URL image"
            required
            disabled={true}
          />
          <label htmlFor="img">Image</label>
          <input
            autoFocus
            id="img"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            className="w-full my-3.5 h-14 text-xl indent-5 outline-0 border border-gray-500 hover:border-main focus:border-main duration-300  rounded-border"
            type="text"
            placeholder="Enter URL image"
            required
          />
          <label htmlFor="name">Name</label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full my-3.5 h-14 text-xl indent-5 outline-0 border border-gray-500 hover:border-main focus:border-main duration-300  rounded-border"
            type="text"
            placeholder="Enter name"
            required
          />
          <label htmlFor="price">Name</label>
          <input
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
              Update Ishlamidi
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

export default React.memo(UpdateForm)
