import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import postAPI from "../../../api/posts-api";

const initialValues = {
    title: '',
    description: ''
}

export default function EditPost({ onClose, post, onUpdate } ) {
    const { postId } = useParams();
    const navigate = useNavigate();


    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(Object.assign(initialValues, post), async () => {
        const updatedPost = await postAPI.update(postId, values)
        onUpdate(updatedPost)
        onClose();
    });

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75"
            onClick={onClose}
        >
            <div
                className="bg-white p-10 rounded-lg shadow-lg w-full max-w-3xl"
                onClick={(e) => e.stopPropagation()} // Prevent the onClick event from triggering on the backdrop when clicking inside the modal
            >
                <h2 className="text-3xl font-bold mb-6">Edit Post</h2>
                <form onSubmit={submitHandler}>
                    <div className="mb-6">
                        <label className="block text-lg font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={values.title}
                            onChange={changeHandler}
                            className="mt-2 p-4 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-lg font-medium text-gray-700">Description</label>
                        <textarea
                            className="mt-2 p-4 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                            name="description"
                            value={values.description}
                            onChange={changeHandler}
                            rows="8"
                            required
                        ></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
            
        </div>
    );
}