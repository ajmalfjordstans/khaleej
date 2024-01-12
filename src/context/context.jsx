'use client'

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  // useEffect(() => {
  //   const handleStart = () => setLoading(true);
  //   const handleComplete = () => setLoading(false);

  //   router.events.on('routeChangeStart', handleStart);
  //   router.events.on('routeChangeComplete', handleComplete);
  //   router.events.on('routeChangeError', handleComplete);

  //   return () => {
  //     router.events.off('routeChangeStart', handleStart);
  //     router.events.off('routeChangeComplete', handleComplete);
  //     router.events.off('routeChangeError', handleComplete);
  //   };
  // }, [router.events]);

  return (
    <Context.Provider value={{
      loading,
      setLoading,
    }}>
      {children}
    </Context.Provider>
  )
}

export const NextContext = () =>{
  return useContext(Context)
}