import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CommentCreate from './CommentCreate'
import CommentList from "./CommentList"

const PostList = () => {
    const [posts, setPosts] = useState({})

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4002/posts')
        console.log(res.data)
        setPosts(res.data)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    const renderedPosts = Object.values(posts).map(post => {
        return (
            <div
                className="card w-25 bg-light"
                style={{ margin: '10px', padding: '0px', border: '0px' }}
                key={post.id}>
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <h3>{post.title}</h3>
                    <hr/>
                    <CommentList comments={post.comments}/>
                    <hr/>
                    <CommentCreate postId={post.id}/>
                </div>
            </div>
        );
    });

    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {renderedPosts}
        </div>);
}

export default PostList