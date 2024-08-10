import { AuthContext } from '../../contexts/AuthContext';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';

import CreatePost from './createPost/createPost';
import Spinner from '../spinner/Spinner';
import PostListItem from './PostListItem';


export default function ForumCatalogue() {
    const { isAuthenticated } = useContext(AuthContext);

    const url = 'http://localhost:3030/jsonstore/posts';
    const { data: posts, isFetching, refetch } = useFetch(url, []);
    const [isCreatingPost, setIsCreatingPost] = useState(false);


    return (
        <>
            <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Forum</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">Share your thoughts and connect with others.</p>
                        {isAuthenticated
                            ? (

                                <Link
                                to="#"
                                className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                onClick={() => setIsCreatingPost(true)}
                                >
                            Share your thoughts
                        </Link>
                        )
                        : (
                            <p className="mt-2 text-lg leading-8 text-gray-600">Log in to connect with the community</p>
                        )
                        }
                    </div>
                


                <div className="mt-10">
                    {isFetching ? (
                        <Spinner />
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {posts.length > 0 ? (
                                posts.map((post) => (
                                    <PostListItem key={post._id} {...post} />
                                ))
                            ) : (
                                <p className="text-center text-gray-600">There are no posts yet</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
            {isCreatingPost && <CreatePost onClose={() => setIsCreatingPost(false)} />}
        </>
    );
}
