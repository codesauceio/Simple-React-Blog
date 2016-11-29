import React, {Component, PropTypes} from 'react';
import Comment from 'Comment';
import CommentForm from 'CommentForm';

const Comments = (props) => {
    const propTypes = {
        comments: PropTypes.array.isRequired
    }
    const getComments = function() {
        let comments = props.post.comments;
        return comments.map((comment, idx) => {
            return <Comment key={idx} comment={comment} />
        });
    }
    const onCommentSave = props.onCommentSave;
    const postId = props.post.id;
    return (
        <div className="comments">
            {getComments()}
            <CommentForm postId={postId} onCommentSave={onCommentSave} />
        </div>
    );

}

export default Comments;
