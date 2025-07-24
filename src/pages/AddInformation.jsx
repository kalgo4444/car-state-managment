import React from 'react'
import Title from '../components/title/Title'
import Form from '../components/form/Form'

const AddInformation = () => {
  return (
    <section>
      <Title
        title={'Add Info'}
        desc={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorem.'
        }
      />
      <Form />
    </section>
  )
}

export default React.memo(AddInformation)
