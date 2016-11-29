import React, {Component, PropTypes} from 'react';
import Post from 'Post';
import BlogPostApi from 'BlogPostApi';

class BlogPosts extends Component {
    constructor(props) {
        super(props);
        let posts = BlogPostApi.getBlogPosts();
        this.state = {
            posts: posts
        }
    }
    getPosts = ()=>{
        let list = this.state.posts.map((post)=>{
            return <li key={post.id}><Post post={post} onCommentSave={this.saveComment} /></li>;
        });
        return list;
    }
    saveComment = (postId, comment)=>{
        let posts = BlogPostApi.saveBlogPostComment(postId, comment, 'Unknown User');
        debugger;
        this.setState({posts: posts});
    }
    render() {
        return (
            <div>
                <h5 className="blog-posts-heading">Recent Posts</h5>
                <ul className="blog-posts">
                    {this.getPosts()}
                </ul>
            </div>
        );
    }
}
export default BlogPosts;
