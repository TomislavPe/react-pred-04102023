import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
    decrement,
    increment,
    incrementByAmount,
} from "./features/counter/counterSlice";
import { getPostsFetch } from "./features/posts/postsSlice";

function App() {
    const count = useSelector((state) => state.counter.value);
    const { postsList, isLoading } = useSelector(
        (state) => state.posts
    );
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <p>Trenutacna vrijednost je {count}</p>
                <button onClick={() => dispatch(increment())}>Inc</button>
                <button onClick={() => dispatch(incrementByAmount(10))}>
                    Za iznos
                </button>
                <button onClick={() => dispatch(decrement())}>Dec</button>
            </div>
            <div>
                <button onClick={() => dispatch(getPostsFetch())}>Get all posts</button>
                {!isLoading ? (
                    postsList.map((post) => {
                        return <div key={post.id}>{post.title}</div>;
                    })
                ) : (
                    <h2>Loading...</h2>
                )}
            </div>
        </>
    );
}

export default App;
