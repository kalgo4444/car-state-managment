import React from 'react'
import Title from '../components/title/Title'
import Cars from '../components/cars/Cars'
import { Toaster } from 'react-hot-toast'

const Home = () => {
  return (
    <section>
      <Title
        title={'Home'}
        desc={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorem.'
        }
      />
      <Toaster position="top-center" reverseOrder={false} />
      <Cars />
    </section>
  )
}

export default React.memo(Home)
