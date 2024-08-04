import { redirect } from "react-router-dom";

export default function CreatePost() {
    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75"
            onClick={() => {(redirect('/forum'))}}
        >
            <div
                className="bg-white p-10 rounded-lg shadow-lg w-full max-w-3xl"
                onClick={(e) => e.stopPropagation()} // Prevent the onClick event from triggering on the backdrop when clicking inside the modal
            >
                <h2 className="text-3xl font-bold mb-6">Create Post</h2>
                <form>
                    <div className="mb-6">
                        <label className="block text-lg font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            className="mt-2 p-4 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-lg font-medium text-gray-700">Description</label>
                        <textarea
                            className="mt-2 p-4 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
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
