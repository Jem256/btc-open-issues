import Link from 'next/link';
import React from 'react';
import { langTags } from '@/data/tags';
import { CiCirclePlus } from 'react-icons/ci';

export default function Sidebar() {
    return (
        <section className='font-sans pt-6 border-r px-6 flex-none w-full md:max-w-sm'>
            <div>
                <h3 className='section-heading'>About</h3>
                <p className='text-sm'>
                    This project curates bitcoin related open-source projects,
                    to help you make your first contribution to open-source.
                </p>
            </div>

            <div className='pt-6'>
                <h3 className='section-heading'>Browse by language</h3>
                <div>
                    {langTags.map((tag, index) => (
                        <Link
                            key={index}
                            className='group mx-1 border px-2 py-1 inline-block rounded-sm my-1 text-sm'
                            href='/'
                        >
                            {tag.language}
                            <span className=''>&times; {tag.count}</span>
                        </Link>
                    ))}
                </div>
            </div>

            <div className='pt-6'>
                <a
                    className='text-ink-400 uppercase rounded-md font-bold text-center px-1 py-3 flex flex-row items-center justify-center space-x-1 border'
                    href='/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <CiCirclePlus className='h-5 w-5 stroke-2' />
                    <span>Add a project</span>
                </a>
            </div>
        </section>
    );
}
