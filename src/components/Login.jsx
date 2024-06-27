import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import toast from "react-hot-toast";

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")

    const loginHandler = async (data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(authLogin(userData))
                navigate('/')

                setTimeout(() => {
                    location.reload()
                }, 1000)
                toast.success('Successfully logged in!')
            }
        } catch (error) {
            toast.error(error.message)
            setError(error.message)
        }
    }

    return (
        <div className="flex justify-center items-center h-screen ">
            <div className=" text-black rounded-xl flex flex-col justify-center items-start w-[60vw]  md:w-[38vw]">
                {/* <div className="w-full flex items-center justify-center">
                    <Logo width="70px" classname="mb-4 " />
                </div> */}

                <div className="flex justify-center items-center w-full font-bold text-3xl mb-4">
                    <h1 className="my-1 dark:text-white">Welcome back</h1>
                </div>


                {error && <p className="text-red-600 my-1">{error}</p>}

                <form onSubmit={handleSubmit(loginHandler)} className="w-full">
                    <Input
                        className="rounded-md border-gray-300 focus:border-blue-500 dark:text-black focus:outline-none p-4 my-2 bg-gray-100  w-full"
                        // label="Email: "
                        placeholder="Email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be a valid address"
                            }
                        })}
                    />

                    <Input
                        className='rounded-md border-gray-300 focus:border-blue-500 dark:text-black focus:outline-none p-4 my-2 bg-gray-100  w-full'
                        // label="Password: "
                        placeholder="Password"
                        type="password"
                        {...register("password", {
                            required: true,
                        })}
                    />

                    <Button
                        type="submit"
                        className="w-full mt-3 p-3 rounded-md"
                    >
                        Sign In
                    </Button>

                    <div className="flex justify-center mt-5">
                        <p className="my-1 dark:text-[#b3b3b3]">
                            Don't have an account&nbsp;
                            <Link
                                to='/signup'
                                className=" underline text-gray-600 dark:text-gray-500"
                            >
                                Signup
                            </Link>
                        </p>
                    </div>
                </form>
            </div>

            {/* <div className="w-1/2 flex items-center justify-center h-full">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1604782206219-3b9576575203?q=80&w=1897&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}></div>
            </div> */}

        </div>
    )
}

export default Login