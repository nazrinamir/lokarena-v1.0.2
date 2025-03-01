import React, { useState } from 'react'
import Button from '../../components/button'
import LabelField from '../../components/labelField'
import Card from '../../components/card'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthProvider'
import { useToast } from '../../contexts/ToastContext'


function Login() {
    const navigate = useNavigate()
    const { login } = useAuth()
    const { showToast } = useToast()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }


    const handleLogin = () => {
        if (!username || !password) {
            showToast('Please fill in all fields', 'error');
            return;
        }
        else {
            showToast('Login successful', 'success');
            login({ id: 1, username: username, password: password });
            navigate('/dashboard');
        }

    };

    return (
        <div className='w-screen h-screen flex justify-center items-center text-white'>
            <div className='w-1/3 mx-auto'>

                <Card title="LOKARENA">

                    <div className="w-full">
                        <LabelField type="text" label="Username" placeholder="Please Enter Username" value={username} onChange={handleUsernameChange} />
                    </div>
                    <div className="w-full">
                        <LabelField type="password" label="Password" placeholder="Please Enter Password" value={password} onChange={handlePasswordChange} />
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

export default Login