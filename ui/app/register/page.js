"use client"

import React, { useState } from 'react';
import RegisterLayout from './layoutSt';
import toast, { Toaster } from 'react-hot-toast';
import { cookies } from 'next/headers'

const RegistrationPage = () => {
    const [stage, setStage] = useState(1);
    const [isLoading, setIsLoading] = useState(false)

    const stages = [
        {
            title: "Personal Information",
            description: "Enter your personal information",
        },
        {
            title: "Education Information",
            description: "Enter your education information",
        },
        {
            title: "Job information",
            description: "Enter your job information"
        }
    ]

    const [personalInfo, setPersonalInfo] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [educationInfo, setEducationInfo] = useState({
        university: '',
        degree: '',
        graduationYear: '',
    });

    const [jobInfo, setJobInfo] = useState({
        company: '',
        position: '',
        startDate: '',
        endDate: '',
    });

    const handlePersonalInfoChange = (e) => {
        setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
    };

    const handleEducationInfoChange = (e) => {
        setEducationInfo({ ...educationInfo, [e.target.name]: e.target.value });
    };

    const handleJobInfoChange = (e) => {
        setJobInfo({ ...jobInfo, [e.target.name]: e.target.value });
    };

    const handlePreviousStage = (e) => {
        e.preventDefault()
        setStage(stage - 1);
    };
    const handleEducationInfo = async (e) => {

    }

    const handlePersonalInfoStage = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            // send http post
            const result = await fetch('http://localhost:5284/api/auth/register/personal-info', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(personalInfo)
            })

            if (result.status === 200) {
                toast.success('Personal info saved')

                // save the token to local storage
                localStorage.setItem('token', result.token)


                console.dir(result)
                setStage(stage + 1)
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Add registration logic
        console.log({ personalInfo, educationInfo, jobInfo });
    };

    const renderStage = () => {
        switch (stage) {
            case 1:
                return (
                    <>
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
                    </>
                );
            case 2:
                return (
                    <>
                        <form onSubmit={handleEducationInfo}>
                            <div className="mb-4">
                                <label htmlFor="university" className="block text-black font-bold mb-2">
                                    University
                                </label>
                                <input
                                    type="text"
                                    id="university"
                                    name="university"
                                    className="w-full border border-gray-300 px-3 py-2 rounded-md"
                                    value={educationInfo.university}
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
                                <label htmlFor="graduationYear" className="block text-black font-bold mb-2">
                                    Graduation Year
                                </label>
                                <input
                                    type="text"
                                    id="graduationYear"
                                    name="graduationYear"
                                    className="w-full border border-gray-300 px-3 py-2 rounded-md"
                                    value={educationInfo.graduationYear}
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
                                onClick={handlePreviousStage}
                            >
                                Previous
                            </button>
                        </form>
                    </>
                );
            case 3:
                return (
                    <>
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
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <Toaster />
            <RegisterLayout step={stage} title={stages[stage - 1].title} description={stages[stage - 1].description}>
                <div className="container mx-auto py-8">{renderStage()}</div>
            </RegisterLayout>
        </>
    );
};

export default RegistrationPage;
