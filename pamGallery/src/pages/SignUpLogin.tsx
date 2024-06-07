import { useState } from "react";
import { Button } from "@/components/ui/button";
import Kouji from '../assets/images/kouji.jpg'
export default function Login () {
    
   const [signUpLoginState,setSignUpLoginState ]= useState<string>('Sign Up')
   const [passwordToggle,setPasswordToggle ]= useState<boolean>(false)
   const handlePasswordToggle= () => {

    setPasswordToggle((prev)=>!prev)
   }
   const handleClick = () => {
    if(signUpLoginState === "Login"){
        setSignUpLoginState("Sign Up")

    }else{
        setSignUpLoginState("Login")

    }
}
  return (
    <div>
        
        <section className="bg-primaryBg min-h-screen flex box-border font-primaryText justify-center items-center">
    <div className= {` bg-primaryBg rounded-2xl flex  p-5 shadow-2xl items-center ${ signUpLoginState === "Login" ? 'max-w-3xl': 'max-w-6xl'} `}>
        <div className="md:w-1/2 px-8">
            {signUpLoginState === 'Login' ? <h2 className="font-bold text-3xl text-[#002D74]">Login</h2> :  <h2 className="font-bold text-3xl text-[#002D74]">SignUp</h2>  }
            <p className="text-sm my-2 text-[#002D74]">Easily {signUpLoginState === 'Login' ? <span>Log in</span>: <span>Sign Up</span>} now.</p> 

            <form action="" className="flex flex-col gap-4">

                
                {signUpLoginState === 'Login' ?  "" :  <input className="p-2 py-2 rounded-xl border" type="name" name="userName" placeholder="Enter a username"></input> }
                {signUpLoginState === 'Login' ?  "" :  <input className="p-2 py-2 rounded-xl border" type="name" name="userName" placeholder="Enter A First Name"></input> }
                {signUpLoginState === 'Login' ?  "" :  <input className="p-2  py-2 rounded-xl border" type="name" name="userName" placeholder="Enter a Last"></input> }

                <input className="p-2 rounded-xl border" type="email" name="email" placeholder="Email"></input>
                <div className="relative">
                    <input className="p-2  py-2 rounded-xl border w-full" type={passwordToggle ? 'password' : 'text'} name="password" id="password" placeholder="Password"></input>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray"  onClick={handlePasswordToggle} id="togglePassword"
                        className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100"
                        viewBox="0 0 16 16">
                        <path
                            d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z">
                        </path>
                        <path
                            d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z">
                        </path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-eye-slash-fill absolute top-1/2 right-3 -z-1 -translate-y-1/2 cursor-pointer hidden"
                        id="mama" viewBox="0 0 16 16">
                        <path
                            d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z">
                        </path>
                        <path
                            d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z">
                        </path>
                    </svg>
                </div>
                <Button className="  text-white py-6 rounded-xl hover:scale-105 transition-all duration-300  font-medium bg-mySecondary" type="submit">{signUpLoginState === 'Login' ? 'Login' : 'Sign up'}</Button>
            </form>
      
            <div className="mt-4 text-sm flex flex-col gap-4 justify-between items-start container-mr">
                <p className="mr-3 md:mr-0 ">{signUpLoginState === "Login" ? " If you don't have an account." : "Continue from where you left off"}</p>
                <Button onClick={handleClick} className="register text-mySecondary border-2 border-mySecondary hover:bg-slate-200 transition-all bg-slate-200  duration-300  rounded-xl py-4 px-8 hover:px-10 hover:border-2 font-semibold ">{signUpLoginState === 'Login' ? 'Register' : 'Login'}</Button>
            </div>
        </div>
        <div className="md:block hidden w-1/2">
            <img className="rounded-2xl max-h-[1600px]" src={Kouji} alt="login form image"></img>
        </div>
    </div>
</section>
      
    </div>
  );
}
