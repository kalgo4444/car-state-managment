import React from 'react'
import UpdateForm from '../components/updateForm/UpdateForm'
import Title from '../components/title/Title'

const UpdateInfo = ({ item }) => {
  console.log(item)
  return (
    <section>
      <Title
        title={'Update Info'}
        desc={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorem.'
        }
      />
      <UpdateForm />
    </section>
  )
}

export default React.memo(UpdateInfo)
