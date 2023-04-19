import { useEffect, useContext } from 'react';
import PostsContext from '../components/PostsContext';


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

export default usePostsData;
