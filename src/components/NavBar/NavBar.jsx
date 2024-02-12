import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
    return (

        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />

            <div className='div-navbar'>
                <img className='logo-epl-main' src="/public/img/pl-main-logo.png" alt="ELP-logo" />

                <Link to={'/'}>
                    <h1 className='h1-header'>EPL</h1>
                </Link>

                <div className='div-ul-header'>
                    <ul className='ul-header'>
                        <li className='li-header'>
                            <NavLink to={'/'}>Inicio</NavLink>
                        </li>
                        <li className='li-header'>
                            <NavLink to={'categoria/Camisetas'}>Camisetas</NavLink>
                        </li>
                        <li className='li-header'>
                            <NavLink to={'categoria/Entradas'}>Entradas</NavLink>
                        </li>

                        <CartWidget />
                    </ul>
                </div>
            </div>

        </>
    )
}

export default NavBar