import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        const url = `http://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));
    },[postId]);
    return (
        <div>
            <h4>This is post detail for {postId}</h4>
            <h3>User Id: {post.userId}</h3>
            <h3>Title: {post.title}</h3>
            <h3>Body: {post.body}</h3>

        </div>
    );
};

export default PostDetail;