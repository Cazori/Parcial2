import React from 'react';
import usePostsData from '../hooks/usePostsData';
import PostsListItem from './PostsListItem';


const PostsList = () => {
  const { isLoading, postsData, error } = usePostsData();

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul className="list-group">
      {postsData.map(post => (
        <PostsListItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostsList;
