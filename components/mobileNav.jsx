'use client'
import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useLockBody } from '@/hooks/use-lock-body';
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

const MobileNav = ({items,children}) => {
    useLockBody();
    return (
        <div className={cn("fixed inset-0 top-16 z-30 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 lg:hidden")}>
            <div className='relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md border'>
                <nav className='grid grid-flow-row auto-rows-auto text-sm'>
                   
                    
                    {
                        items.map((item,index) =>(
                            <Link
                                key={index}
                                href={item.disable ? "#" : item.href}
                                className={cn("flex items-center w-full rounded-md text-sm p-2 font-medium hover:underline", item.disable && "cursor-not-allowed opacity-60")}
                            >
                                {item.title}
                            </Link>
                        ))
                    }
                </nav>

                <div className='items-center gap-3 flex lg:hidden'>
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
            </div>

            
        </div>
    );
};

export default MobileNav;