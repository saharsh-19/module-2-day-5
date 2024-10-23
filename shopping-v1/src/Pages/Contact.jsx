import React from 'react'
import {useForm} from 'react-hook-form'
import CustomButton from '../components/CustomButton'

const Contact = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label> Enter your name</label>
      <input {...register("firstName")} type="text" />
      <br></br><label> Enter your email</label>
      <input {...register("email")} type="text" />
      <br></br><label> Enter your message</label>
      <input {...register("message")} type="text" />
      <br></br> 
      <input type="submit" />
    </form>
  )
}

export default Contact