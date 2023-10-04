import { useState, useEffect } from "react";

const Comments = ({ postId }) => {
    const [comments, setComments] = useState();
    const [visible, setVisible] = useState(false);

    const getData = async () => {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        );
        const data = await res.json();
        setComments(data);
    };

    const toggleComments = () => {
        if (!comments) {
            getData();
        }
        setVisible(!visible);
    };

    return (
        <>
            <button onClick={toggleComments}>
                {visible ? "Hide comments" : "View comments"}
            </button>
            {visible && comments && (
                <div>
                    {comments.map(({ id, body }) => (
                        <div key={id}>
                            <p>{body}</p>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default Comments;
