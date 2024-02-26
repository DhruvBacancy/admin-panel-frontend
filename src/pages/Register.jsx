import React from "react"
import { Link } from "react-router-dom"
import { registrationSchema } from "../validations/RegistrationSchema"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

const Register = () => {
  const formOptions = { resolver: yupResolver(registrationSchema) }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions)
  const onSubmit = (data) => console.log(data)

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex place-content-center w-full'>
            <div className='w-1/5 mr-3.5'>
              <label
                htmlFor='firstName'
                className='block text-sm font-medium leading-6 text-gray-900 mt-44'
              >
                First Name*
              </label>
              <div className='relative mt-2 rounded-md shadow-sm'>
                <input
                  type='text'
                  name='firstName'
                  id='firstName'
                  className='block w-full rounded-md border-0 py-1.5 pl-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  placeholder='First Name'
                  {...register("firstName")}
                />
              </div>
              {errors.firstName && (
                <p className='text-red-500'>{errors.firstName?.message}</p>
              )}
            </div>
            <div className='w-1/5 ml-3.5'>
              <label
                htmlFor='lastName'
                className='block text-sm font-medium leading-6 text-gray-900 mt-44'
              >
                Last Name
              </label>
              <div className='relative mt-2 rounded-md shadow-sm'>
                <input
                  type='text'
                  name='lastName'
                  id='lastName'
                  className='block w-full rounded-md border-0 py-1.5 pl-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  placeholder='Last Name'
                  {...register("lastName")}
                />
              </div>
              {errors.lastName && (
                <p className='text-red-500'>{errors.lastName?.message}</p>
              )}
            </div>
          </div>
          <div className='flex place-content-center w-full'>
            <div className='w-5/12'>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900 mt-5'
              >
                Email*
              </label>
              <div className='relative mt-2 rounded-md shadow-sm'>
                <input
                  type='text'
                  name='email'
                  id='email'
                  className='block w-full rounded-md border-0 py-1.5 pl-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  placeholder='Email'
                  {...register("email")}
                />
              </div>
              {errors.email && (
                <p className='text-red-500'>{errors.email?.message}</p>
              )}
            </div>
          </div>
          <div className='flex place-content-center'>
            <div className='w-5/12'>
              <label
                htmlFor='password'
                className='block text-sm font-medium leading-6 text-gray-900 mt-5'
              >
                Password*
              </label>
              <div className='relative mt-2 rounded-md shadow-sm'>
                <input
                  type='password'
                  name='password'
                  id='password'
                  className='block w-full rounded-md border-0 py-1.5 pl-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  placeholder='Password'
                  {...register("password")}
                />
              </div>
              {errors.password && (
                <p className='text-red-500'>{errors.password?.message}</p>
              )}
            </div>
          </div>
          <div className='flex place-content-center'>
            <div className='w-5/12'>
              <label
                htmlFor='password'
                className='block text-sm font-medium leading-6 text-gray-900 mt-5'
              >
                Confirm Password*
              </label>
              <div className='relative mt-2 rounded-md shadow-sm'>
                <input
                  type='password'
                  name='confirmPassword'
                  id='confirmPassword'
                  className='block w-full rounded-md border-0 py-1.5 pl-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  placeholder='Confirm Password'
                  {...register("confirmPassword")}
                />
              </div>
              {errors.confirmPassword && (
                <p className='text-red-500'>Passwords do not match</p>
              )}
            </div>
          </div>
          <div className='flex place-content-center'>
            {/* <div className='w-5/12'>
              <label
                htmlFor='role'
                className='block text-sm font-medium leading-6 text-gray-900 mt-5'
              >
                Role*
              </label>
              <div className='relative mt-2 rounded-md shadow-sm'>
                <select
                  type='password'
                  name='confirmPassword'
                  id='confirmPassword'
                  className='block w-full rounded-md border-0 py-1.5 pl-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  placeholder='Confirm Password'
                  {...register("role")}
                >
                  <option value='admin' className="block w-full rounded-md border-0 py-1.5 pl-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">Admin</option>
                  <option value='user'>User</option>
                </select>
              </div>
            </div>
          </div>
          <div className='flex place-content-center'> */}
            <div className='w-5/12'>
              <button className='bg-indigo-500 w-full text-center rounded-md border-0 mt-5 py-1.5 pl-1.5 text-white'>
                Register
              </button>
            </div>
          </div>
        </form>
        <div className='flex place-content-center w-full'>
          <div className='w-5/12 mt-5'>
            Do you have an account?
            <Link to={"/signin"} className='ml-1 text-blue-600'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
