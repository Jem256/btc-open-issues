import Link from 'next/link';
import React from 'react';

import { langTags } from '@/data/tags';

export default function Navbar() {
    return (
        <header className='w-full py-4 border-b border-ink-200 bg-ink-400'>
            <nav className='flex items-center justify-center flex-wrap'>
                <Link
                    href='/'
                    className='flex items-center text-gray-700 font-bold'
                >
                    {/* <img
                        src='~/assets/gfi-logo-white.svg'
                        alt='Good First Issue'
                        className='h-12'
                    /> */}
                    <h1>Contribute To Bitcoin</h1>
                </Link>
                <span v-if='activeTag' className='text-2xl cursor-pointer'>
                    <span className='font-normal ml-2 mr-1 text-slate'>/</span>
                    <span className='font-semibold text-juniper'>
                        {langTags[0].language}
                    </span>
                </span>
            </nav>
        </header>
    );
}
