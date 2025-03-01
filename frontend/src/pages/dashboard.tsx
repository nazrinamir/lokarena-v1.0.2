import React from 'react'
import Sidebar from '../components/sidebar'
import { useAuth } from '../contexts/AuthProvider';
import LabelValue from '../components/labelValue';
import Card from '../components/card';
import Table from '../components/table';

function dashboard() {
    const { user } = useAuth();

    const teamName = user.teamName;
    const established = user.established;

    const wld = [
        {
            label: "W",
            value: "10"
        },
        {
            label: "L",
            value: "10"
        },
        {
            label: "D",
            value: "10"
        },
        {
            label: "F",
            value: "10"
        },

    ];

    return (
        <div className='w-full h-screen flex text-white p-5'>

            <div className='w-full flex flex-col gap-5'>
                <h1 className='text-2xl font-bold m-5'>
                    Welcome to Lokarena, {user.username}
                </h1>
                <div className='flex flex-row gap-5 bg-[#292525] p-5 rounded-2xl shadow-lg'>
                    <div className='w-1/7'>
                        logo
                    </div>
                    <div className='w-full flex flex-col justify-between gap-5'>
                        <div className='w-full flex flex-col gap-5'>
                            <div>
                                Team Name
                            </div>
                            <div>
                                2020-present
                            </div>
                        </div>
                        <div className='flex flex-row gap-5'>
                            {wld.map((item) => (
                                <LabelValue label={item.label} value={item.value} />
                            ))}
                        </div>

                    </div>
                    <div className='w-1/2 flex flex-col gap-2'>
                        <div>
                            <LabelValue label="Total Match" value="5/10" />
                        </div>
                        <div>
                            <LabelValue label="Win Rate" value="10" />
                        </div>
                        <div>
                            <LabelValue label="Win Rate" value="10" />
                        </div>
                        <div>
                            <LabelValue label="Total Point" value="10" />
                        </div>
                    </div>

                </div>
                <div className='flex flex-row gap-5 '>
                    <Card title='Upcoming Match'>
                        <div className='h-screen flex flex-col justify-center items-center'>
                            <div className='text-center text-2xl font-bold'>
                                Arsenal FC
                            </div>
                        </div>
                    </Card>
                    <Card title='Recent Match'>
                        <div>
                            <div>
                                
                            </div>
                        </div>
                    </Card>
                    <Card title='Team History'>
                        <Table />
                    </Card>
                </div>
                <div>part5</div>
                <div>part6</div>
                <div>part7</div>
                <div>part8</div>
            </div>
        </div>
    )
}

export default dashboard