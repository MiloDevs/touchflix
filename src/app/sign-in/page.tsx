"use client"
import Image from 'next/image';
import React, {useState} from 'react';
import listUsers, { createUser, login } from '../lib/appwrite/appwrite-helper';
import toast, { Toaster } from 'react-hot-toast';

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    const user = login(email, password);
    if(user != null){
      toast.success("Login successful");
    }else{
      toast.error("Login failed");
    }
  }
  return (
    <div className="flex w-full h-screen">
      <div className="flex w-1/2 h-full">
        <Image
          src={
            "https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/05d8322d-7649-4429-ba92-76c8b3075572/KE-en-20231023-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          }
          alt="background"
          className="w-full object-cover"
          height={1080}
          width={1920}
          priority={true}
          placeholder="blur"
          blurDataURL="data:https://s6.imgcdn.dev/99Zgq.webp"
        />
      </div>
      <div className="flex justify-center items-center w-1/2">
        <form>
          <h1>Sign in</h1>
          <div className="mt-3 flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm">
              Email
            </label>
            <input
              title="email_input"
              type="email"
              onChange={(e) => {
                e.preventDefault();
                setEmail(e.target.value);
              }}
              className="px-6 pl-2 py-2 bg-transparent border-none outline rounded outline-neutral-600"
            />
          </div>
          <div className="mt-2 flex flex-col">
            <label htmlFor="password mb-1" className=" text-sm">
              Password
            </label>
            <input
              title="password_input"
              type="password"
              onChange={(e) => {
                e.preventDefault();
                setPassword(e.target.value);
              }}
              className="px-6 pl-2 py-2 bg-transparent border-none outline rounded outline-neutral-600"
            />
          </div>
          <div className="mt-2 flex items-center">
            <input title="remember_me" className='mr-1' type="checkbox" />
            <label htmlFor="remember_me" className='text-sm'>Remember me</label>
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="bg-neutral-800 w-full py-2"
              title="sign_in"
              onClick={(e) => {
                e.preventDefault();
                loginUser();
              }}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
