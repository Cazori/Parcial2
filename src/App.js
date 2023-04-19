import logo from './logo.svg';
import './App.css';
import PostsApp from './PostsApp';
import PostsAppC from "./components/PostsList";

function App() {
  return (
    <div className="App">
      <PostsApp/>
    </div>
    //No alcance a terminar de dividir bien los componentes(me enrede un poco con los import)
  );
}

export default App;
