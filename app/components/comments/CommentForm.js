import React, {Component, PropTypes} from 'react';

class CommentForm extends Component {
    constructor(props) {
        super(props);
    }
    onFormSubmit = ()=>{
        let comment = this.refs.comment.value;
        if(!comment || comment.length < 1) { return; } 

        let postId = this.props.postId;
        this.refs.comment.value = '';
        this.props.onCommentSave(postId, comment);
    }
    static propTypes = {
        postId: PropTypes.number.isRequired,
        onCommentSave: PropTypes.func.isRequired
    }
    render() {
        return (
            <form className="form comment-form" onSubmit={this.onFormSubmit.bind(this)}>
                <div className="form-group">
                    <textarea className="form-control" ref="comment" placeholder="Enter a Comment"></textarea>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-default" value="Submit" />
                </div>
            </form>
        );
    }
}

export default CommentForm;
