"use client"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast';
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

export function Login() {
    const [login, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    async function handleLogin() {
        var result = await getData();

        console.log({ password, email: login });
        console.log('Login get data result: ' + result);
    }
    async function getData() {
        try { // fetch with post method
        const res = await fetch('http://localhost:5284/api/auth/login',
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ login, password })
            })

        if (!res.ok) {
            // TODO: better log handling, maybe sentry? Or even a logging library
            console.log('error: ', res);
            toast.error('Response is not ok: ' + res.statusText)
        }

        if (res.status === 200) {
            toast.success('Login success')
            router.push('/') // Redirect to the home page
        } } catch (ex) {
            console.log(ex)
            toast.error('Something went wrong, really wrong: ' + ex.message)
        }
    }
    return (
        <div>
            <Toaster />
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <h2>Please login to continue</h2>
                <Input onChange={(e) => { setEmail(e.target.value) }} type="email" id="email" placeholder="Email" />

                <Input onChange={(e) => { setPassword(e.target.value) }} type="password" id="password" placeholder="Password" />

                <Button onClick={handleLogin}>Login</Button>
            </div></div>
    )
}


