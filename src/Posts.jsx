import { useEffect, useState } from "react";
import Post from "./Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <div>
            {posts.map((post) => {
                return (
                    <Post
                        key={post.id}
                        title={post.title}
                        body={post.body}
                        postId={post.id}
                    />
                );
            })}
        </div>
    );
};

export default Posts;
