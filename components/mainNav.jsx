'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from './logo';
import { cn } from '@/lib/utils';
import { ModeToggle } from "@/components/darkMode";
import { ThemeProvider } from "@/components/theme-provider";
import { X } from 'lucide-react';
import { Button, buttonVariants } from './ui/button';
import { Menu } from 'lucide-react';
import { User } from 'lucide-react';
import { UserRoundCheck } from 'lucide-react';
import { BookOpenCheck } from 'lucide-react';
import { Trophy } from 'lucide-react';
import { LockOpen } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar,AvatarFallback, AvatarImage } from './ui/avatar';
import MobileNav from './mobileNav';


const MainNav = ({items,children}) => {

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <>
            <div className='flex  gap-6 lg:gap-10'>
                <Link href="/">
                    <Logo/>
                </Link>
                {
                    items?.length ? (
                        <nav className='hidden gap-6 lg:flex'>
                            {
                                items?.map((item,index) =>(
                                    <Link
                                        key={index}
                                        href={item.disable ? "#" : item.href}
                                        className={cn("flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm ")}
                                    >
                                        {item.title}
                                    </Link>
                                ))
                            }
                        </nav>
                    ) : null
                }

                {showMobileMenu && items && (
                    <MobileNav items={items}>{children}</MobileNav>
                )}
              
            </div>

            <nav className='flex items-center gap-3'>
                <div className='items-center gap-3 hidden lg:flex'>
                     <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                        >
                            <ModeToggle/>
                    </ThemeProvider>

                    <Link href='/login' className={cn(buttonVariants({size:"sm"}), "px-4")}> Login </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm">Register</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center" className="w-25 mt-2">
                            <DropdownMenuItem className="cursor-pointer">
                                <Link href='' className='font-semibold flex justify-center items-center'><User className='m-1' />Student</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                                <Link href='' className='font-semibold flex justify-center items-center'> <UserRoundCheck className='m-1' />Instructor</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className='cursor-pointer'>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="sokheng"></AvatarImage>
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                    </DropdownMenuTrigger>

                     <DropdownMenuContent align="center" className="w-50 mt-2">
                            <DropdownMenuItem className="cursor-pointer" asChild>
                                <Link href='account' className='font-semibold flex justify-start items-center'><User className='m-1' />Profile</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer" asChild>
                                <Link href='account/enrolled-courses' className='font-semibold flex justify-start items-center'> <BookOpenCheck className='m-1' />My Courses</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer" asChild>
                                <Link href='' className='font-semibold flex justify-start items-center'> <Trophy className='m-1' />Testimonials & Certificates</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer" asChild>
                                <Link href='logout' className='font-semibold flex justify-start items-center'> <LockOpen  className='m-1' />Logout</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                </DropdownMenu>

                <button className='flex items-center space-x-2 lg:hidden' onClick={() => setShowMobileMenu(!showMobileMenu)}>{showMobileMenu ? <X/> : <Menu/> }</button>
            </nav>
        </>
        
    );
};

export default MainNav;