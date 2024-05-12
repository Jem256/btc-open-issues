import React from 'react';
import { FaRocketchat } from 'react-icons/fa';
import { data } from '@/data/repoData';

export default function RepoContainer() {
    return (
        <div>
            {data.map((repo, index) => (
                <div
                    className='select-none border w-full rounded-md mb-4 cursor-pointer hover:bg-ink-300 group'
                    key={index}
                >
                    <div className='px-5 py-3'>
                        <div className='flex flex-row'>
                            <a>
                                {repo.owner} / {repo.name}
                            </a>
                            <span className='flex-1'></span>
                            <span>{repo.issues.length}</span>
                        </div>

                        <div className='flex-row flex text-sm py-1 overflow-auto'>
                            {repo.description}
                        </div>
                        <div className='flex-row flex text-sm py-1 font-mono'>
                            <div className='mr-4'>
                                <span className='text-vanilla-400'>lang: </span>
                                {repo.language}
                            </div>
                            <div className='mr-4'>
                                <span className='text-vanilla-400'>
                                    stars:{' '}
                                </span>
                                {repo.stars_display}
                            </div>
                            <div className='mr-4'>
                                <span className='text-vanilla-400'>
                                    last activity:{' '}
                                </span>
                                <span>{repo.last_modified}</span>
                            </div>
                        </div>
                    </div>

                    {/* <ol className="px-5 py-3 text-base leading-loose border-t border-ink-200">
                        <li className="flex flex-row items-start justify-start py-1">
                            <span className="text-slate text-right px-2 leading-snug font-mono" style="min-width: 70px">#{{ issue.number }}</span>
                            <div className="flex items-start flex-row flex-auto">
                            <a
                                title="Open issue on GitHub"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="leading-snug font-medium hover:text-juniper text-vanilla-300 block flex-auto"
                                >{{ issue.title }}</a>
                            <div
                                v-if="issue.comments_count > 0"
                                className="flex flex-row items-center justify-end mt-1 w-10"
                            >
                                <FaRocketchat className="mt-px w-3.5 h-3.5" />
                                <span className="ml-1 text-sm leading-snug font-mono">{{ issue.comments_count }}</span>
                            </div>
                            </div>
                        </li>
                    </ol> */}
                </div>
            ))}
        </div>
    );
}
