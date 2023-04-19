import React, { useEffect, useReducer, useContext } from 'react';

// Crear el contexto
const PostsContext = React.createContext();

// Crear un reducer para manejar el estado de la aplicación
const initialState = {
  isLoading: true,
  postsData: [],
  error: '',
};
const postsReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        isLoading: false,
        postsData: action.payload,
        error: '',
      };
    case 'FETCH_ERROR':
      return {
        isLoading: false,
        postsData: [],
        error: 'Error al obtener los datos',
      };
    default:
      return state;
  }
};


const usePostsData = () => {
  const [state, dispatch] = useContext(PostsContext);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => dispatch({ type: 'FETCH_SUCCESS', payload: data }))
      .catch(error => dispatch({ type: 'FETCH_ERROR' }));
  }, [dispatch]);

  return state;
};


const PostsAppT = () => {
  const [state, dispatch] = useReducer(postsReducer, initialState);

  return (
    <PostsContext.Provider value={[state, dispatch]}>
      <div className="container">
        <h1 className="my-4">Lista de Posts</h1>
        <PostsList />
      </div>
    </PostsContext.Provider>
  );
};


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
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};


const PostItem = ({ post }) => {
  return (
    <li className="list-group-item">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>User ID: {post.userId}</p>
      <p>Post ID: {post.id}</p>
    </li>
  );
};

export default PostsAppT;
