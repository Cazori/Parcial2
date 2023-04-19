import React from 'react';


const PostsListItem = ({ post }) => {
  return <li className="list-group-item">{post.title}</li>;
};

export default PostsListItem;
