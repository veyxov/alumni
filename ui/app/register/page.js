"use client"

import RegisterLayout from './layoutSt';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux'
import { login } from '../GlobalRedux/slice'
import { useState } from 'react';

const RegistrationPage = () => {
    const [stage, setStage] = useState(1);
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()

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

    const [educationInfo, setEducationInfo] = useState({
        universityName: '',
        degree: '',
        graduationDate: '',
    });

    const [jobInfo, setJobInfo] = useState({
        company: '',
        position: '',
        startDate: '',
        endDate: '',
    });

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
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Add registration logic
        console.log({ personalInfo, educationInfo, jobInfo });
    };

    const renderStage = () => {
        switch (stage) {
            case 2:
                return (
                    <>
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
