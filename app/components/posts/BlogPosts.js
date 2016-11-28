import React, {Component, PropTypes} from 'react';
import Post from 'Post';
import blogPostApi from 'BlogPostApi';

class BlogPosts extends Component {
    constructor(props) {
        super(props);
        this.posts = blogPostApi.getBlogPosts();
    }
    posts = [];
    getPosts = function() {
        let list = this.posts.map((post, idx)=>{
            return <li key={idx}><Post post={post} /></li>;
        });
        return list;
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
