import React, { useState } from "react";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { Button, Input, Logo } from './index'
import toast from "react-hot-toast";

function Signup() {
    const [error, setError] = useState("")
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const signup = async (data) => {
        setError("")
        try {
            const session = await authService.createAccount(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) {
                    dispatch(login(userData))
                }
                navigate('/')

                setTimeout(() => {
                    location.reload()
                },1000)
                toast.success('Successfully signed in')
            }
        } catch (error) {
            toast.error(error.message)
            setError(error.message)
        }
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-black rounded-xl flex flex-col justify-center items-start w-[60vw]  md:w-[38vw]">
                {/* <div>
                    <Logo width="100%" />
                </div> */}

                <div className="flex justify-center items-center w-full font-bold text-3xl mb-4">
                    <h1 className="my-1 dark:text-white">Sign up to create account</h1>
                </div>

                {error && <p className="text-red-600 my-1">{error}</p>}

                <form onSubmit={handleSubmit(signup)} className="w-full">
                    <Input
                        className="rounded-md border-gray-300 focus:border-blue-500 dark:text-black focus:outline-none p-4 my-2 bg-gray-100  w-full"
                        placeholder="Full Name"
                        // label="Full Name: "
                        type="text"
                        {...register("name", {
                            required: true
                        })}
                    />

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
                            required: true
                        })}
                    />

                    <Button
                        type="submit"
                        className="w-full mt-3 p-3 rounded-md"
                    >
                        Create Account
                    </Button>

                    <div className="flex justify-center mt-5">
                        <p className="my-1 dark:text-[#b3b3b3]">
                            Already have an account &nbsp;
                            <Link to="/login" className="underline text-gray-600 dark:text-gray-500">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup