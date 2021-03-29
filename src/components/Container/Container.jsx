import { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Container = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const url = 'https://0q27loouph.execute-api.us-east-1.amazonaws.com';

        fetch(url)
        .then(response => {
            return response.json();
        }).then((response) => {
            setPosts(response);
        });
    }, []);

    console.log(posts);

    return (
        <div id='FeedContainer'>
            <Post post={posts}></Post>
        </div>
    );
};

export default Container;