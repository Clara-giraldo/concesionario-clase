import { Sidebar } from 'components/Sidebar'
import React from 'react'

export const PrivateLayout = ({Children}) => {
    return (
        <div>
            <Sidebar/>
            {Children}
        </div>
    )
}
