import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
    return (
        <nav className='bg-red-500'>
            <ul className='flex w-full justify-between my-3'>
                <li>Logo </li>
                <li>Navegacion1</li>
                <li>Navegacion2</li>
                <li>Navegacion2</li>
                <li className='px-3'>
                    <Link to='/login'>
                    <button className='bg-indigo-500 text-white rounded-lg hover:bg-indigo-300 shadow-md' >
                        Iniciar Sección</button>
                        </Link>
                </li>

            </ul>
        </nav>
    )
}
