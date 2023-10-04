import { useState, useEffect } from "react";
import Comments from "./Comments"

const Posts = () => {
    const [posts, setPosts] = useState();

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
        const data = await res.json();
        setPosts(data);
    };

    return (
        <>
            {posts &&
                posts.map(({ id, title , body}) => {
                    return (
                        <div key={id}>
                            <h2>{title}</h2>
                            <h3>{body}</h3>
                            <Comments postId={id}/>
                        </div>
                    );
                })}
        </>
    );
};

export default Posts;
