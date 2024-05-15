'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import RepoContainer from '@/components/repoContainer';
import Sidebar from '@/components/sidebar';
import axios from 'axios';

interface Project {
    full_name: string;
    description: string;
    language: string;
    stargazers_count: number;

    // Add more properties as needed
}

export default function Home() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterLanguage, setFilterLanguage] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('/api');
                console.log('res', response);
                setProjects(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <main className='py-8 px-6 flex flex-col md:flex-row'>
            <div className='md:w-1/3'>
                <Sidebar setFilterLanguage={setFilterLanguage} />
            </div>
            <div className='md:w-2/3'>
                <RepoContainer
                    filterLanguage={filterLanguage}
                    projects={projects}
                />
            </div>
        </main>
    );
}
