import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Logo, LogoutBtn, ThemeBtn } from '../index'
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const authStatus = useSelector(state => state.auth.status)
    const navigate = useNavigate()
    const [menu, setMenu] = useState(false);

    const navItems = [
        {
            name: "Home",
            slug: "/",
            status: true
        },
        {
            name: "Login",
            slug: "/login",
            status: !authStatus
        },
        {
            name: "Signup",
            slug: "/signup",
            status: !authStatus
        },
        {
            name: "AddPost",
            slug: "/add-post",
            status: authStatus
        },
        {
            name: "AllPosts",
            slug: "/all-posts",
            status: authStatus
        },
    ]

    return (
        <>
            <header className="bg-white px-2 pt-0 text-black w-full dark:bg-[#282828] dark:text-white">
                <Container>
                    <nav className="flex justify-between items-center border-b dark:border-none w-full px-4 dark:pt-1">
                        <div className="flex items-center w-[150px] md:w-[200px]">
                            <Link to='/'>
                                <Logo />
                            </Link>
                        </div>

                        <div className="flex items-center">
                            <div className="md:m-4">
                                <ThemeBtn />
                            </div>

                            <div>
                                <div className="block md:hidden mt-1">
                                    <button onClick={() => setMenu(!menu)}>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                        </svg>
                                    </button>
                                </div>

                                <div className={`fixed top-0 right-0 h-full bg-white dark:bg-[#181818] shadow-lg transition-transform transform ${menu ? 'translate-x-0' : 'translate-x-full'} w-64 z-50 md:hidden`}>
                                    <button className="absolute top-4 left-4" onClick={() => setMenu(false)}>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </button>



                                    <ul className="mt-16">
                                        {navItems.map((item) =>
                                            item.status ? (
                                                <li key={item.name} className="mx-4 my-2">
                                                    <button onClick={() => {
                                                        setMenu(false); // Close menu after navigating
                                                        navigate(item.slug);
                                                    }}>
                                                        {item.name}
                                                    </button>
                                                </li>
                                            ) : null
                                        )}

                                        {authStatus && (
                                            <li className="ml-3"><LogoutBtn /></li>
                                        )}
                                    </ul>
                                </div>



                                <div className="hidden md:block">
                                    <ul className="flex items-center p-2 pl-0">
                                        {navItems.map((item) =>
                                            item.status ? (
                                                <li key={item.name} className="mx-4">
                                                    <button onClick={() => navigate(item.slug)}>
                                                        {item.name}
                                                    </button>
                                                </li>
                                            ) : null
                                        )}

                                        {authStatus && (
                                            <li><LogoutBtn /></li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </Container>
            </header>
        </>
    )
}

export default Header

