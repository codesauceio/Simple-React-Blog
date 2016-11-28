import React, {Component, PropTypes} from 'react';

class Post extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let post = this.props.post;
        let setAvatar = function() {
            let img;
            if(post.avatarUri && post.avatarUri.length > 0) {
                img = <img src={post.avatarUri} className="blog-post-avatar" />
            }
            return img;
        }
        return (
            <div className="blog-post">
                {setAvatar()}
                <h2 className="blog-post-title">{post.title}</h2>
                <p className="blog-post-subtitle">
                    By <a href={post.authorUri} target="_blank">{post.author}</a> under <span className="label label-primary">{post.category}</span>
                </p>
                <p className="blog-post-body">{post.body}</p>
            </div>
        );
    }
}
export default Post;
