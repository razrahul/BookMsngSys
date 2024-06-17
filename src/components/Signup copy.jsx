import React,{useState} from 'react'
import { Link,Navigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import { Logo, Input, Button} from './index'
import { useForm } from 'react-hook-form'
import authService from '../appwrite/auth'

function Signup() {

    const [error, setError] = useState("")

    const navigate = Navigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm();

    
    const create = async (data) =>{
        setError("")
        try {
            const session = await authService.createAccount(data)
            if(session){
                const userData = await authService.getCurrentUser()
                if(userData){
                    dispatch(authLogin(userData))
                    navigate("/")
                }
                
            }
        } catch (error) {
            setError(error.message)
        }

    }


  return (
    <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="mt-8 text-center text-red-600">{error}</p>}
                <form onSubmit={handleSubmit(create)}>
                    <div className=' space-y-5'>
                        <Input
                         label="Full Name"
                         placeholder="Enter Your Full Name"
                         {...register("name",{
                            required:true,
                         })}
                        />
                        <Input
                        label="Email"
                        placeholder="Enter Your Email"
                        type="email"
                        {...register("email",{
                            required: true,
                            validate: {
                                matchpatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || " Email address must be valid email address"
                                
                            }
                        })}
                        />
                        <Input
                        label="Password"
                        placeholder="Enter Your Password"
                        type="password"
                        {...register("password",{
                            required: true,
                            // minLength: 6
                        })}
                        />
                        <Button
                        type="submit"
                        className=' w-full'
                        >Create Account</Button>
                    </div>
                </form>
                
            </div>

    </div>
  )
}

export default Signup
