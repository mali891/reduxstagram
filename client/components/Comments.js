import React from 'react';

class Comments extends React.Component {
 handleSubmit(e) {
  e.preventDefault();

  const { postId } = this.props.params;
  const author = this.refs.author.value;
  const comment = this.refs.comment.value;

  if (author !== '' && comment !== '') {
   this.props.addComment(postId, author, comment);
   this.refs.commentForm.reset();
  }
 }

  render() {
   const { comments } = this.props;
   const { postId } = this.props.params;

    return (
      <div className="comments">
        {comments[postId] && comments[postId].length > 0 ? comments[postId].map((comment, index) => (
         <div className="comment" key={index}>
          <p>
           <strong>{comment.user}</strong>
           {comment.text}
           <button className="remove-comment" onClick={() => this.props.removeComment(postId, index)}>&times;</button>
          </p>
         </div>
        )) : 
         <div className="comment">
          <p>No comments</p>
         </div>
        }
        <br/>
        <br/>
        <br/>
        <form onSubmit={(e) => this.handleSubmit(e)} ref="commentForm" className="comment-form">
         <input type="text" ref="author" placeholder="Author"/>
         <input type="text" ref="comment" placeholder="Comment"/>
         <br/>
         <br/>
         <button type="submit">Add comment</button>
        </form>
      </div>
    )
  }
}

export default Comments;