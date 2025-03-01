import React from 'react'
import Button from '../../components/button'
import LabelField from '../../components/labelField'
import Card from '../../components/card'
import { Link } from 'react-router-dom'


const handleLogin = () => {
    console.log('login')
}

function login() {
    return (
        <div className='w-screen h-screen flex justify-center items-center text-white'>
            <div className='w-1/3 mx-auto'>

                <Card title="LOKARENA">

                    <div className="w-full">
                        <LabelField label="Username" placeholder="Please Enter Username" onChange={() => { }} />
                    </div>
                    <div className="w-full">
                        <LabelField label="Password" placeholder="Please Enter Password" onChange={() => { }} />
                    </div>
                    <div className='w-full p-4'>

                        <Button className='w-full' label="LOGIN" onClick={handleLogin} />
                    </div>
                    <div className='w-full p-1 text-center'>
                        <span>Don't have an account? <Link to="/register">Register</Link></span>
                    </div>

                </Card>

            </div>
        </div>
    )
}

export default login