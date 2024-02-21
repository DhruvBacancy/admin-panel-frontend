import React, { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useAtom } from "jotai"
import { userDataAtom } from "../util/jotai/userDataAtom"
// import { updateUser } from "../api"; // You need to implement this function to update the user data

const EditUser = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [userData, setUserData] = useAtom(userDataAtom)
  const { register, handleSubmit, setValue } = useForm()
  const user = userData.find((user) => user.id === id)

  useEffect(() => {
    if (user) {
      setValue("firstName", user.firstName)
      setValue("lastName", user.lastName)
      setValue("email", user.email)
      setValue("password", user.password)
      setValue("role", user.role)
    }
  }, [user, setValue])

  const onSubmit = async (data) => {
    try {
      // Update user data
      await updateUser(id, data)
      // Refresh user data from the API
      setUserData(await fetchUserData())
      // Navigate back to Home
      //   navigate("/");
    } catch (error) {
      console.error("Error updating user:", error)
    }
  }

  const onCancel = () => {
    // Navigate back to Home
    navigate("/")
  }

  return (
    <div className='flex justify-center items-center h-full mt-4'>
      <div className='w-full max-w-md'>
        <h1 className='text-2xl font-bold mb-4 text-center'>Edit User</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label htmlFor='firstName' className='block'>
              First Name
            </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              className='px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-200'
              {...register("firstName")}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='lastName' className='block'>
              Last Name
            </label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              className='px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-200'
              {...register("lastName")}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-200'
              {...register("email")}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block'>
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              className='px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-200'
              {...register("password")}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='role' className='block'>
              Role
            </label>
            <input
              type='text'
              id='role'
              name='role'
              className='px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-200'
              {...register("role")}
            />
          </div>
          <div className='flex justify-center mt-6'>
            <button
              type='button'
              onClick={onCancel}
              className='mr-4 px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditUser
