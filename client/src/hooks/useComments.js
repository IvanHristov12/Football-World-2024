import { useEffect, useState } from "react";
import commentsAPI from "../api/comments-api";

export function useCreateComment() {
    const createHandler = (postId, comment) => commentsAPI.create(postId, comment)

    return createHandler;
}

export function useGetAllComments(postId) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await commentsAPI.getAll(postId);

            setComments(result);
        })();
    }, [postId])

    return [comments, setComments]
}