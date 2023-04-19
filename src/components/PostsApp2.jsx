import React, { useReducer } from 'react';
import PostsContext from './PostsContext';
import PostsList from './components/PostsList';


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

// Crear el componente principal de la aplicación
const PostsApp = () => {
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

export default PostsApp;
