import Link from 'next/link';
import React from 'react';

import { langTags } from '@/data/tags';
import { FaGithub } from 'react-icons/fa';

export default function Navbar() {
    return (
        <header className='w-full py-4 border-b border-black'>
            <nav className='flex items-center justify-center flex-wrap gap-2'>
                <h1 className='font-semibold text-2xl'>
                    Contribute To Bitcoin
                </h1>
                <Link href='/' target='_blank' rel='noopener noreferrer'>
                    <FaGithub className='h-5 w-5 stroke-2' />
                </Link>
            </nav>
        </header>
    );
}
