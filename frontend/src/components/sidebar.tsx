import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';
import Button from './button';



const Sidebar = () => {
    const navigate = useNavigate();
    const { logout, user } = useAuth();

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    const pages = [
        {
            name: `Profile ${user.username.charAt(0).toUpperCase() + user.username.slice(1)}`,
            path: '/profileuser'
        },
        {
            name: 'Profile Team',
            path: '/profileteam'
        },
        {
            name: 'Matchmaking',
            path: '/matchmaking'
        },
        {
            name: 'Rating',
            path: '/rateTeam'
        },
        {
            name: 'Setting',
            path: '/setting'
        }
    ]

    return (
        <div className="fixed top-0 left-0 w-1/6 h-[98%] bg-[#292525] m-2 rounded-2xl p-4 shadow-lg overflow-y-auto">
            <div className='flex flex-col gap-4 h-full'>
                <div onClick={() => navigate('/dashboard')} className=" hover:cursor-pointer text-2xl text-center font-bold text-[#d0ec44] p-5">
                    LOKARENA
                </div>
                <div className='flex flex-col gap-2 justify-between h-full'>
                    <div className="flex flex-col gap-2">
                        {pages.map((page) => (
                            <div
                                key={page.name}
                                onClick={() => handleNavigation(page.path)}
                                className="p-2 text-white hover:bg-[#383434] rounded-lg cursor-pointer transition-colors"
                            >
                                {page.name}
                            </div>
                        ))}
                    </div>
                    <Button
                        label="Logout"
                        className="mt-auto p-2 text-white hover:bg-[#383434] rounded-lg cursor-pointer transition-colors"
                        onClick={logout}
                    >

                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;