import './App.css';
import { Navigation } from './app/navigation';
import { Header } from './app/header';
import { Search } from './app/search';
import { Posts } from './app/posts';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div style={{ width: '70%', margin: '0 auto'}}>
       <Header />
        <Search />
        <Posts />
      </div>
    </div>
  );
}

export default App;
