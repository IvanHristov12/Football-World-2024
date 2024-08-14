import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";

import { useGetOnePost } from "../../../hooks/usePosts";
import { useForm } from "../../../hooks/useForm";
import { useGetAllComments, useCreateComment } from "../../../hooks/useComments";
import postAPI from "../../../api/posts-api";

const initialValues = {
    comment: '',
}

export default function ForumPostDetails() {
    const navigate = useNavigate();
    const { postId } = useParams();
    const [comments, setComments] = useGetAllComments(postId)
    const createComment = useCreateComment();
    const [post] = useGetOnePost(postId);

    const { username, isAuthenticated, userId } = useAuthContext();

    const {
        changeHandler,
        submitHandler,
        values
    } = useForm(initialValues, async ({ comment }) => {
        try {
            const newComment = await createComment(postId, comment);

            setComments(oldComments => [...oldComments, newComment]);
        } catch (err) {
            console.log(err.message);
        }

    });

    const postDeleteHandler = async () => {
        try {
            await postAPI.remove(postId);

            navigate('/')
        } catch (err) {
            console.log(err.message);
        }
    }

    const isOwner = userId === post._ownerId; 

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
            <div className="lg:max-w-2xl mx-auto mt-16">
                <div className="text-center">
                    <p className="text-base font-semibold leading-7 text-indigo-600">{post.username}</p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{post.title}</h1>
                    <p className="mt-6 text-xl leading-8 text-gray-700">{post.description}</p>
                </div>
                {(isAuthenticated && isOwner) && 
                    (
                        <div className="mt-6 flex items-center justify-center space-x-4">
                            <button
                                type="button"
                                className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                EDIT
                            </button>
                            <button
                                type="button"
                                onClick={postDeleteHandler}
                                className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            >
                                DELETE
                            </button>
                        </div>
                    )
                }
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-900">Comments</h2>
                    {isAuthenticated &&
                        (
                            <form className="mt-6" onSubmit={submitHandler}>
                                <div className="mb-6">
                                    <label className="block text-sm font-semibold leading-6 text-gray-900 text-center">Your username: {username}</label>
                                </div>
                                <textarea
                                    name="comment"
                                    className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    rows="4"
                                    placeholder="Add a comment..."
                                    onChange={changeHandler}
                                    value={values.comment}
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
                        )
                    }
                    <div className="mt-8 space-y-4">
                        {comments.map((comment) => (
                            <div key={comment._id} className="p-4 border border-gray-300 rounded-md shadow-sm">
                                <p className="text-sm font-semibold text-gray-900">{comment.author?.username || username}</p>
                                <p className="mt-2 text-gray-700">{comment.text}</p>
                            </div>
                        ))
                        }
                        {comments.length === 0 && <p>No comments yet.</p>}
                    </div>
                </div>
            </div>

        </div>
    );
}
