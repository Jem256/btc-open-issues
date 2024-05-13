'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { data } from '@/data/repoData';
import { CiCirclePlus } from 'react-icons/ci';

const Sidebar: React.FC<{ setFilterLanguage: (language: string) => void }> = ({
    setFilterLanguage,
}) => {
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const languageCounts: { [key: string]: number } = data.reduce(
        (acc: { [key: string]: number }, repo) => {
            acc[repo.language] = (acc[repo.language] || 0) + 1;
            return acc;
        },
        {}
    );

    const handleClick = (language: string) => {
        setSelectedLanguage(language);
        setFilterLanguage(language);
    };

    return (
        <section className='font-sans flex-none w-full md:max-w-sm'>
            <div className='pt-6'>
                <h3 className='font-bold text-xl pb-2'>About</h3>
                <p className='text-sm'>
                    This project curates bitcoin related open-source projects,
                    to help you make your first contribution to open-source.
                </p>
            </div>

            <div className='pt-6'>
                <h3 className='font-bold text-xl pb-2'>Browse by language</h3>
                <div>
                    {Object.keys(languageCounts).map((language, index) => (
                        <Link
                            key={index}
                            className={`group mx-1 border border-black px-2 py-1 inline-block rounded-sm my-1 text-sm ${
                                selectedLanguage === language
                                    ? 'bg-gray-200'
                                    : ''
                            }`}
                            href='/'
                            onClick={() => handleClick(language)}
                        >
                            <span>
                                {language} &times; {languageCounts[language]}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sidebar;
