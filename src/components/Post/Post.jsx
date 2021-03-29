const Post = ({post}) => {

    return (
        <div id='Post'>
            <div>
                <p>{post.name}</p>
                <p>{post.email}</p>
                <p>{post.phone}</p>
                <img src={post.image} alt={post.name}></img>
            </div>
        </div>
    );
}

export default Post;