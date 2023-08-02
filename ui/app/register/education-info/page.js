"use client"

import RegisterLayout from './../layoutSt.js';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { useRouter } from 'next/navigation.js';

export default function Page() {
    const [educationInfo, setEducationInfo] = useState({
        universityName: '',
        degree: '',
        graduationDate: '',
    });

    const handleEducationInfoChange = (e) => {
        setEducationInfo({ ...educationInfo, [e.target.name]: e.target.value });
    };

    const router = useRouter()

    const handleEducationInfo = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            // NOTE: Convert graduation date to date object
            educationInfo.graduationDate = new Date(educationInfo.graduationDate)

            console.log(educationInfo)
            // send http post
            const result = await fetch('http://localhost:5284/api/auth/register/education-info', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer " + localStorage.getItem("token")
                },
                body: JSON.stringify(educationInfo)
            })

            if (result.status === 200) {
                toast.success('Education info saved')
                // save the token to local storage

                const data = await result.json()
                console.log("Educatino info saving: " + data);

                // TODO: Dispatch something?
                // dispatch(login(data.token))
                router.push('/register/employment-info')
            } else {
                toast.error('Something went wrong: ' + result.statusText)
            }
        } catch (err) {
            console.error(err)
            //toast.error(err)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <RegisterLayout step="Second" title="education information">
            <Toaster />
            <form onSubmit={handleEducationInfo}>
                <div className="mb-4">
                    <label htmlFor="universityName" className="block text-black font-bold mb-2">
                        University
                    </label>
                    <input
                        type="text"
                        id="universityName"
                        name="universityName"
                        className="w-full border border-gray-300 px-3 py-2 rounded-md"
                        value={educationInfo.universityName}
                        onChange={handleEducationInfoChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="degree" className="block text-black font-bold mb-2">
                        Degree
                    </label>
                    <input
                        type="text"
                        id="degree"
                        name="degree"
                        className="w-full border border-gray-300 px-3 py-2 rounded-md"
                        value={educationInfo.degree}
                        onChange={handleEducationInfoChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="graduationDate" className="block text-black font-bold mb-2">
                        Graduation Year
                    </label>
                    <input
                        type="text"
                        id="graduationDate"
                        name="graduationDate"
                        className="w-full border border-gray-300 px-3 py-2 rounded-md"
                        value={educationInfo.graduationDate}
                        onChange={handleEducationInfoChange}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Next
                </button>
                <button
                    type="button"
                    className="bg-gray-300 text-black py-2 px-4 rounded-md ml-2 hover:bg-gray-400"
                    onClick={router.back()}
                >
                    Previous
                </button>
            </form>
        </RegisterLayout>
    )
}
