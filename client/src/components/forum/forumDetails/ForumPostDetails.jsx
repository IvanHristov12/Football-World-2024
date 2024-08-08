import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import Spinner from "../../spinner/Spinner";
import { useEffect, useState } from "react";
import commentsApi from "../../../api/comments-api";
import postAPI from "../../../api/posts-api";
import { useGetOnePost } from "../../../hooks/usePosts";

export default function ForumPostDetails() {
    
    const { postId } = useParams();
    const url = `http://localhost:3030/jsonstore/posts/${postId}`;
    const { data, isFetching } = useFetch(url, []);
    
    const [post, setPost] = useGetOnePost(postId);
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');


    

    const commentSubmitHandler = async (e) => {
        e.preventDefault();

        const newComment = await commentsApi.create(postId, username, comment);

        setPost(prevState => ({
            ...prevState,
            comments: {
                ...prevState.comments,
                [newComment._id]: newComment,
            }
        }))

        setUsername('');
        setComment('');

    }

    return (
        <div className="relative isolate overflow-hidden bg-white h-screen px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    aria-hidden="true"
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                >
                    <defs>
                        <pattern
                            x="50%"
                            y={-1}
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
                </svg>
            </div>
            {isFetching ? (
                <Spinner />
            ) : (
                <div className="lg:max-w-2xl mx-auto mt-16">
                    <div className="text-center">
                        <p className="text-base font-semibold leading-7 text-indigo-600">{data[2]}</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{data[0]}</h1>
                        <p className="mt-6 text-xl leading-8 text-gray-700">{data[1]}</p>
                    </div>
                    <div className="mt-6 flex items-center justify-center space-x-4">
                        <button
                            type="button"
                            className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Like
                        </button>
                        <span className="text-xl text-gray-700">0 Likes</span>
                    </div>
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-900">Comments</h2>
                        <form className="mt-6" onSubmit={commentSubmitHandler}>
                            <input
                                type='text'
                                className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="username"
                                name="username"
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                            >
                            </input>
                            <textarea
                                name="comment"
                                className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                rows="4"
                                placeholder="Add a comment..."
                                onChange={(e) => setComment(e.target.value)}
                                value={comment}
                            ></textarea>
                            <div className="mt-4 flex justify-end">
                                <button
                                    type="submit"
                                    className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

                                >
                                    Post Comment
                                </button>
                            </div>
                        </form>
                        <div className="mt-8 space-y-4">
                            {post.comments && Object.values(post.comments).map((comment) => (
                                <div key={comment._id} className="p-4 border border-gray-300 rounded-md shadow-sm">
                                    <p className="text-sm font-semibold text-gray-900">{comment.username}</p>
                                    <p className="mt-2 text-gray-700">{comment.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
