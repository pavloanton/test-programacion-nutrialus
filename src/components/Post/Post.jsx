import ButtonReload from '../ButtonReload/ButtonReload';

const Post = ({post}) => {

    return (
        <div id='Post'>
            <table class="table-fill">
                <thead>
                    <tr>
                        <th class="text-center" colSpan="2">Test de programación - Nutrialus | Pablo Anton</th>
                    </tr>
                </thead>
                <tbody class="table-hover">
                    <tr>
                        <td class="text-left">{post.name}</td>
                        <td class="text-left" rowSpan="3" ><img src={post.image} alt={post.name}></img></td>
                    </tr>
                    <tr>
                        <td class="text-left">{post.email}</td>
                    </tr>
                    <tr>
                        <td class="text-left">{post.phone}</td>
                    </tr>
                    <tr>
                        <td class="text-center" colSpan="2"><ButtonReload/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Post;