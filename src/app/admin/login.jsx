import React, { useState } from 'react'

export default function Login({setLoggedIn}) {
  const [input, setInput] = useState({
    email: "",
    pass: ""
  })
  const credentials = {
    email: "leicester@khaleejmandi.co.uk",
    pass: "khaleejadmin"
  }
  const handleLogin=()=>{
    if(JSON.stringify(input) === JSON.stringify(credentials)){
      setLoggedIn(true)
    }else{
      setLoggedIn(false)
    }
  }
  return (
    <div className='h-[100dvh] w-[100vw] fixed top-0 bg-white z-[200] flex justify-center items-center'>
      <div class="relative flex flex-col text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
        <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Log in as Admin
        </h4>
        <form class="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96">
          <div class="flex flex-col gap-6 mb-1">
            <h6
              class="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
              Your Email
            </h6>
            <div class="relative h-11 w-full min-w-[200px]">
              <input placeholder="name@mail.com"
                onChange={(e) => {
                  setInput({
                    ...input,
                    email: e.target.value
                  });
                }}
                class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
            </div>
            <h6
              class="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
              Password
            </h6>
            <div class="relative h-11 w-full min-w-[200px]">
              <input type="password" placeholder="********"
                onChange={(e) => {
                  setInput({
                    ...input,
                    pass: e.target.value
                  });
                }}
                class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
            </div>
          </div>

          <button
            onClick={handleLogin}
            class="mt-6 block w-full select-none rounded-lg bg-primary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            Log In
          </button>

        </form>
      </div>

    </div>
  )
}
