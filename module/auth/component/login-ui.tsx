"use client"
import React from 'react'
import {signIn} from "@/lib/auth-client";
import {GithbIcon} from "lucide-react"
import {useState} from "react";


const LoginUI = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGithubLogin = async () => {
    setIsLoading(true)
    try {
      await signIn.social({
        provider: "github",
      })
    } catch (error) {
      console.error("Login Error:", error)
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-black to-zinc-900 text-white dark flex">

    </div>
  )
}
export default LoginUI
