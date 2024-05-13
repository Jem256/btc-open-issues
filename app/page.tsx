'use client';
import React, { useState } from 'react';
import RepoContainer from '@/components/repoContainer';
import Sidebar from '@/components/sidebar';

export default function Home() {
    const [filterLanguage, setFilterLanguage] = useState('');

    return (
        <main className='py-8 px-6 flex flex-col md:flex-row'>
            <div className='md:w-1/3'>
                <Sidebar setFilterLanguage={setFilterLanguage} />
            </div>
            <div className='md:w-2/3'>
                <RepoContainer filterLanguage={filterLanguage} />
            </div>
        </main>
    );
}
