import React from 'react'
import { useAuth } from '../contexts/AuthProvider';

const pages = [
    {
        name: 'Profile',
        path: '/page1'
    },
    {
        name: 'Matchmaking',
        path: '/page2'
    },
    {
        name: 'Rating',
        path: '/page3'
    },
    {
        name: 'Setting',
        path: '/page4'
    }
]
const Sidebar = () => {
    const { isAuthenticated } = useAuth();
    return (
        <div className={`${isAuthenticated ? 'block' : 'hidden'} m-4 w-1/6`}>
            <div className='flex flex-col gap-4'>
                <div>
                    Logo
                </div>
                <div>
                    {pages.map((page) => (
                        <div key={page.name}>
                            {page.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar