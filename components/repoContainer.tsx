'use client';
import React, { useState } from 'react';
import { FaRocketchat } from 'react-icons/fa';

interface Project {
    full_name: string;
    description: string;
    language: string;
    stargazers_count: number;
    // Add other fields as necessary
}

interface RepoContainerProps {
    filterLanguage: string;
    projects: Project[];
}

const RepoContainer: React.FC<RepoContainerProps> = ({
    filterLanguage,
    projects,
}) => {
    // const [showIssues, setShowIssues] = useState<boolean[]>(
    //     new Array(projects.length).fill(false)
    // );

    // const handleToggleIssues = (index: number) => {
    //     const newShowIssues = [...showIssues];
    //     newShowIssues[index] = !newShowIssues[index];
    //     setShowIssues(newShowIssues);
    // };

    const filteredData = filterLanguage
        ? projects.filter(
              (repo: { language: string }) => repo.language === filterLanguage
          )
        : projects;

    return (
        <div>
            {filteredData.map((repo, index) => (
                <div
                    className='select-none border border-black w-full rounded-md mb-4 cursor-pointer hover:bg-ink-300 group shadow-lg bg-opacity-70 w-full'
                    key={index}
                >
                    <div className='px-5 py-3'>
                        <div className='flex flex-row'>
                            <a>{repo.full_name}</a>
                            <span className='flex-1'></span>
                            {/* <span onClick={() => handleToggleIssues(index)}>
                                {repo.issues.length} issues
                            </span> */}
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
                                {repo.stargazers_count}
                            </div>
                            <div className='mr-4'>
                                <span className='text-vanilla-400'>
                                    last activity:{' '}
                                </span>
                                {/* <span>{repo.last_modified}</span> */}
                            </div>
                        </div>
                    </div>

                    {/* {showIssues[index] && (
                        <ol className='px-5 py-3 text-base leading-loose border-t border-ink-200'>
                            {repo.issues.map((issue, i) => (
                                <li
                                    key={i}
                                    className='flex flex-row items-start justify-start py-1'
                                >
                                    <span className='text-slate text-right px-2 leading-snug font-mono'>
                                        #{issue.number}
                                    </span>
                                    <div className='flex items-start flex-row flex-auto'>
                                        <a
                                            title='Open issue on GitHub'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='leading-snug font-medium hover:text-juniper text-vanilla-300 block flex-auto'
                                        >
                                            {issue.title}
                                        </a>
                                        {issue.comments_count > 0 && (
                                            <div className='flex flex-row items-center justify-end mt-1 w-10'>
                                                <FaRocketchat className='mt-px w-3.5 h-3.5' />
                                                <span className='ml-1 text-sm leading-snug font-mono'>
                                                    {issue.comments_count}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ol>
                    )} */}
                </div>
            ))}
        </div>
    );
};

export default RepoContainer;
