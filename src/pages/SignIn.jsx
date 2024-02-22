import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "../validations/SignInSchema"
import { Link, useNavigate } from "react-router-dom"
import { userLogin } from "../api/auth/authApiHandler"
import { useMutation } from "@tanstack/react-query"
import { AuthContextExport } from "../util/context/AuthContext"

const SignIn = () => {
  const { login } = AuthContextExport()
  const formOptions = { resolver: yupResolver(loginSchema) }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions)
  const navigate = useNavigate()

  const mutation = useMutation({ mutationFn: userLogin })

  const onSubmit = async (formData) => {
    await mutation
      .mutateAsync(formData)
      .then(async (res) => {
        if (res.data.data.token) {
          localStorage.setItem("token", res.data?.data?.token || "")
          login(res.data?.data?.token, res.data?.data?.role)
          navigate("/")
        }
      })
      .catch((error) => {
        console.log(error.message)
      })
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex place-content-center w-full'>
            <div className='w-5/12'>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900 mt-52'
              >
                Email*
              </label>
              <input
                type='text'
                name='email'
                id='email'
                className='block w-full rounded-md border-0 py-1.5 pl-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                placeholder='Email'
                {...register("email")}
              />
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
            <div className='w-5/12 '>
              <button className='bg-indigo-500 w-full text-center rounded-md border-0 mt-5 py-1.5 pl-1.5 text-white'>
                Log In
              </button>
            </div>
          </div>
        </form>
        <div className='flex place-content-center w-full'>
          <div className='w-5/12 mt-5'>
            Want to Register Instead?
            <Link to={"/register"} className='ml-1 text-blue-600'>
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn
