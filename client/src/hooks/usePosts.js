import { useEffect, useState } from "react";
import postAPI from "../api/posts-api";


export function useGetAllPosts() {
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        (async () => {
            setIsFetching(true);
            const result = await postAPI.getAll;

            setPosts(result);
            setIsFetching(false);
        })();
    }, []);

    return [posts, setPosts, isFetching];
};

export function useGetOnePost(postId) {
    const [post, setPost] = useState({});


    useEffect(() => {
        (async () => {
                const result = await postAPI.getOne(postId);
                
                setPost(result);

        })();
    }, [postId]);

    return [
        post,
        setPost,
    ];
}

export function useCreatePost() {
    const postCreateHandler = (postData) => postAPI.create(postData)
    
    return postCreateHandler;
}
