import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {
  render() {
   const { posts, params, comments } = this.props;
   const index = posts.findIndex((post) => post.code === params.postId);
   const post = posts[index];
   const postComments = comments[params.postId] || [];

    return (
      <div className="single-photo">
        <Photo i={index} post={post} {...this.props} />
        <Comments comments={postComments} {...this.props} />
      </div>
    )
  }
}

export default Single;