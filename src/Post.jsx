import { useState } from "react";
import Comment from "./Comment";

const Post = ({ title, body, postId }) => {
    const [comments, setComments] = useState([]);

    const getComments = () => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then((res) => res.json())
            .then((data) => setComments(data));
    };

    return (
        <>
            <h2 style={{ color: "grey" }}>{title}</h2>
            <h3>{body}</h3>
            <button onClick={getComments}>View the comments</button>
            {comments.map((comment) => {
                return <Comment key={comment.id} body={comment.body} />;
            })}
        </>
    );
};

export default Post;
