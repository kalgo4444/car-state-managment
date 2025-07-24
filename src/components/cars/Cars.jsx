import { useNavigate } from 'react-router-dom'
import { useStore } from '../../store/useStore'
import toast from 'react-hot-toast'

const Cars = () => {
  const { cars, getInfo } = useStore()
  const navigate = useNavigate()
  return (
    <div className="py-6">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {cars?.map((item) => (
          <article key={item?.id} className="bg-neutral-900 rounded-border">
            <div className="bg-neutral-200 text-black rounded-border overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="w-full min-h-[300px] h-full bg-contain hover:scale-105  duration-300"
              />
            </div>
            <div className="py-4 px-3">
              <h3 className="text-2xl font-semibold">{item.name}</h3>
              <p className="text-lg text-neutral-400">{item.price}$</p>
              <div className="flex items-center justify-end gap-2.5 mt-6 px-2">
                <button
                  onClick={() => navigate(`/update/${item.id}`)}
                  className="py-1 px-3 bg-neutral-700 rounded-border hover:bg-neutral-600 duration-300 cursor-pointer"
                >
                  Rename
                </button>
                <button
                  onClick={() => {
                    getInfo(item)
                    toast.error(`${item.name} is deleted`, {
                      duration: 1000,
                    })
                  }}
                  className="py-1 px-3 bg-neutral-700 rounded-border hover:bg-neutral-600 duration-300 cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Cars
