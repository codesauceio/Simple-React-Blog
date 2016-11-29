import React, {Component, PropTypes} from 'react';

const Comment = (props) => {
    const comment = props.comment;
    const propTypes = {
        comment: PropTypes.object.isRequired
    }
    const setTimeDisplay = (dateVal)=>{
        if(!dateVal || dateVal.length < 1) { return ''; }

        let oneDay = Math.ceil(24*60*60*1000); // hours*minutes*seconds*milliseconds
        let firstDate = new Date();
        let secondDate = Date.parse(dateVal);
        let diffDays = Math.round(Math.abs( ( firstDate.getTime() - secondDate) / (oneDay) ) );
        let text = "days ago.";

        if(diffDays < 1 ){
            text = "day ago."
        }
        return (diffDays === 0)? ' today' : diffDays.toString() + ' ' + text;
    }
    return (
        <div className="comment">
            <div className="comment-avatar"><img src={comment.avatarUri} /></div>
            <div className="comment-content">
                <p><span className="comment-author">{comment.author}</span> commented {setTimeDisplay(comment.date)}</p>
                <p>{comment.body}</p>
            </div>
        </div>
    );
}

export default Comment;
