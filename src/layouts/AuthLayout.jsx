import React from 'react'

const AuthLayout = ({children}) => {
    return (
        <div className='flex flex-col items-center justify-centar bg-gray-50'>
            layout autenticacion
            <div className='w-full'>{children}</div>
        </div>
    );
};

export default AuthLayout
