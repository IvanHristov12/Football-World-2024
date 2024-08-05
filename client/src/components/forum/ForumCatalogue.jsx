import { useState } from 'react';
import { Link } from 'react-router-dom'
import CreatePost from './createPost/createPost';

export default function ForumCatalogue() {
    const posts = [
        {
            _id: 'gsgf2g1',
            title: 'Sample Post 1',
            description: 'This is a sample post. Share your thoughts and connect with others!',
            author: 'John Doe'
        },
        {
            _id: 'gsgf134132g1',
            title: 'Sample Post 2',
            description: 'Another example of a post. Engage with the community and discuss various topics.',
            author: 'Jane Smith'
        },
        {
            _id: 'gsgf262782g1',
            title: 'Sample Post 3',
            description: 'Feel free to contribute by sharing your insights and experiences.',
            author: 'Alice Johnson'
        },
        {
            _id: 'gsg717f2g1',
            title: 'Sample Post 4',
            description: 'Join the discussion and interact with other community members.',
            author: 'Bob Brown'
        },
        {
            _id: 'gsg2626f2g1',
            title: 'Sample Post 5',
            description: 'Discuss recent events and share your perspectives.',
            author: 'Charlie Davis'
        },
        {
            _id: 'gsgf2115g1',
            title: 'Sample Post 6',
            description: 'Stay updated with the latest discussions and news.',
            author: 'Diana Evans'
        }
    ];

    const [isCreatingPost, setIsCreatingPost] = useState(false);

    return (
        <>
            <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Forum</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">Share your thoughts and connect with others.</p>
                    <Link
                        to="#"
                        className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => setIsCreatingPost(true)}
                    >
                        Share your thoughts
                    </Link>
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post, index) => (
                            <div key={index} className="p-4 border rounded-md shadow-sm">
                                <Link to={`/forum/${post._id}`} className="text-xl font-semibold text-indigo-600 hover:underline">{post.title}</Link>
                                <p className="mt-2 text-gray-800">{post.description}</p>
                                <p className="mt-4 text-sm text-gray-500">By {post.author}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {isCreatingPost && <CreatePost onClose={() => setIsCreatingPost(false)} />}
        </>
    );
}

// REPLACE INDEX WITH _ID WHEN IMPLEMENTING SERVER GENERATION OF POSTS
