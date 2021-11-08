import { Sidebar } from 'components/Sidebar'
import React from 'react'

const PrivateLayout = ({Children}) => {
    return (
        <div className='flex w-screen h-screen bg-blue-300'>
            <Sidebar/>
            <main className='flex w-full bg-blue-300'>
            {Children}
            </main>
        </div>
    )
}

export default PrivateLayout;