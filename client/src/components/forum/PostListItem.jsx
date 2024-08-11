import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext';

export default function PostListItem({
    _id,
    _ownerId,
    title,
    description,
    username
}) {

    return (
        <div key={_id} className="p-4 border rounded-md shadow-sm">
            <Link to={`/forum/${_id}`} className="text-xl font-semibold text-indigo-600 hover:underline">{title}</Link>
            <p className="mt-2 text-gray-800 line-clamp-3 overflow-hidden text-ellipsis">{description}</p>
            <p className="mt-4 text-sm text-gray-500">By {username}</p>
        </div>
    );
}