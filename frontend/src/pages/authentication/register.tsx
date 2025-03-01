import React, { useState } from 'react'
import Button from '../../components/button'
import Card from '../../components/card'
import LabelField from '../../components/labelField'
import { Navigate, useNavigate } from 'react-router-dom'
function Register() {
    const [currentStep, setCurrentStep] = useState(1)
    const navigate = useNavigate()
    const totalSteps = 2
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const handleAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
        setPassword(e.target.value)
        setConfirmPassword(e.target.value)
        setFullName(e.target.value)
        setEmail(e.target.value)
        setPhoneNumber(e.target.value)
    }

    const handleNext = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(prev => prev + 1)
        }
        else {
            navigate('/')
        }
    }
    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1)
        }
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center text-white'>
            <div className="w-1/3 mx-auto">
                <Card title="Register">
                    {/* Step Indicator */}
                    <div className="mb-8">
                        <div className="relative">
                            {/* Horizontal Line */}
                            <div className="absolute top-1/2 right-0 left-0 w-1/4 h-1 mx-auto bg-gray-300 -translate-y-1/2" />

                            {/* Step Circles */}
                            <div className="relative flex w-1/4 mx-auto gap-5 justify-between">
                                {[1, 2].map((step) => (
                                    <div
                                        key={step}
                                        className={`w-8 h-8 rounded-full flex items-center justify-center z-10 
                    ${step <= currentStep ? 'bg-[#d0ec44] text-black' : 'bg-gray-300 text-gray-600'}`}
                                    >
                                        {step}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Form Fields */}
                    {currentStep === 1 ? (
                        <>
                            <LabelField type="text" label="Username" placeholder="Please Enter Username" value={username} onChange={handleAllChange} />
                            <LabelField type="password" label="Password" placeholder="Please Enter Password" value={password} onChange={handleAllChange} />
                            <LabelField type="password" label="Confirm Password" placeholder="Please Enter Confirm Password" value={confirmPassword} onChange={handleAllChange} />
                        </>
                    ) : (

                        <>
                            <LabelField type="text" label="Full Name" placeholder="Please Enter Full Name" value={fullName} onChange={handleAllChange} />
                            <LabelField type="email" label="Email" placeholder="Please Enter Email" value={email} onChange={handleAllChange} />
                            <LabelField type="tel" label="Phone Number" placeholder="Please Enter Phone Number" value={phoneNumber} onChange={handleAllChange} />
                        </>
                    )}

                    {/* Navigation Buttons */}
                    <div className="mt-6 flex gap-2 justify-end">
                        {currentStep > 1 && (
                            <Button
                                label="Back"
                                onClick={handleBack}
                                className="w-24"
                            />
                        )}
                        <Button
                            label={currentStep === totalSteps ? "Register" : "Next"}
                            onClick={handleNext}
                            className="w-24"
                        />
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Register