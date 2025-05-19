import React from 'react';
import Footer from '@/components/footer';
import MainNav from '@/components/mainNav';

const navLinks = [
    {
        title: "Features",
        href: "/features"
    },
    {
        title: "Pricing",
        href: "/pricing"
    },
    {
        title: "Blog",
        href: "/blog"
    },
    {
        title: "Documentations",
        href: "/documentations"
    },
    {
        title: "About",
        href: "/about"
    },
]

const Mainlayout = ({children}) => {
    return (
        <div className='flex min-h-screen flex-col'>
            <header className='z-40 bg-background/30 backdrop-blur-lg fixed top-0 left-0 right-0 border-b border-slate-200 dark:border-blue-300'>
                <div className='container flex h-20 items-center justify-between py-6'>
                    <MainNav items={navLinks}/>
                </div>
            </header>
            <main className='flex-1 pt-20 flex flex-col border-b border-gray-700'>
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Mainlayout;