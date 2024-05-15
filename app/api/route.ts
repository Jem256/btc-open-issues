import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const repositories = [
    { owner: 'facebook', repo: 'react' },
    { owner: 'tensorflow', repo: 'tensorflow' },
    // Add more repositories as needed
];

async function fetchRepositoryInfo(owner: string, repo: string) {
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}`;
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error(`Error fetching repository ${owner}/${repo}:`, error);
        return null;
    }
}

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        const repositoryData = await Promise.all(
            repositories.map((repo) =>
                fetchRepositoryInfo(repo.owner, repo.repo)
            )
        );
        res.status(200).json(repositoryData);
    } catch (error) {
        console.error('Error fetching repository information:', error);
        res.status(500).json({
            error: 'Failed to fetch repository information',
        });
    }
}
