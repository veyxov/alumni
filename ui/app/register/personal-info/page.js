"use client"
import RegisterLayout from './../layoutSt.js';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux'
import { login } from '../../GlobalRedux/slice'
import { useState } from 'react';
import { useRouter } from 'next/navigation.js';

export default function Page() {
    const [personalInfo, setPersonalInfo] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [isLoading, setIsLoading] = useState(false)
    
    const router = useRouter()

    const dispatch = useDispatch()

    const handlePersonalInfoChange = (e) => {
        setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
    };
    const handlePersonalInfoStage = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            // send http post
            const result = await fetch('http://localhost:5284/api/auth/register/personal-info', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'accept': '*/*' },
                body: JSON.stringify(personalInfo)
            })

            if (result.status === 200) {
                toast.success('Personal info saved')
                // save the token to local storage

                const data = await result.json()

                console.log(data)
                localStorage.setItem('token', data.token)
                dispatch(login(data.token))

                router.push('/register/education-info')
            } else {
                toast.error('Something went wrong: ' + result.statusText)
            }
        } catch (err) {
            console.error(err)
            //toast.error(err)
        } finally {
            setIsLoading(false)
        }
    };


    return (<>
            <RegisterLayout step="First" title="personal information">
            <form onSubmit={handlePersonalInfoStage}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-black font-bold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full border border-gray-300 px-3 py-2 rounded-md"
                        value={personalInfo.name}
                        onChange={handlePersonalInfoChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-black font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full border border-gray-300 px-3 py-2 rounded-md"
                        value={personalInfo.email}
                        onChange={handlePersonalInfoChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-black font-bold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full border border-gray-300 px-3 py-2 rounded-md"
                        value={personalInfo.password}
                        onChange={handlePersonalInfoChange}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="confirmPassword" className="block text-black font-bold mb-2">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className="w-full border border-gray-300 px-3 py-2 rounded-md"
                        value={personalInfo.confirmPassword}
                        onChange={handlePersonalInfoChange}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    {isLoading ? 'Loading...' : 'Next'}
                </button>
            </form>
        </RegisterLayout>
    </>)
}
