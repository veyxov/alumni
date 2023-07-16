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
            <Toaster />
            <RegisterLayout step="First" title="personal information">
            <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="company" className="block text-black font-bold mb-2">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    className="w-full border border-gray-300 px-3 py-2 rounded-md"
                                    value={jobInfo.company}
                                    onChange={handleJobInfoChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="position" className="block text-black font-bold mb-2">
                                    Position
                                </label>
                                <input
                                    type="text"
                                    id="position"
                                    name="position"
                                    className="w-full border border-gray-300 px-3 py-2 rounded-md"
                                    value={jobInfo.position}
                                    onChange={handleJobInfoChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="startDate" className="block text-black font-bold mb-2">
                                    Start Date
                                </label>
                                <input
                                    type="text"
                                    id="startDate"
                                    name="startDate"
                                    className="w-full border border-gray-300 px-3 py-2 rounded-md"
                                    value={jobInfo.startDate}
                                    onChange={handleJobInfoChange}
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="endDate" className="block text-black font-bold mb-2">
                                    End Date
                                </label>
                                <input
                                    type="text"
                                    id="endDate"
                                    name="endDate"
                                    className="w-full border border-gray-300 px-3 py-2 rounded-md"
                                    value={jobInfo.endDate}
                                    onChange={handleJobInfoChange}
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                            >
                                Register
                            </button>
                            <button
                                type="button"
                                className="bg-gray-300 text-black py-2 px-4 rounded-md ml-2 hover:bg-gray-400"
                                onClick={handlePreviousStage}
                            >
                                Previous
                            </button>
                        </form>
        </RegisterLayout>
    </>)
}
