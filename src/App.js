import './App.css';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';

function App() {
  return (
    <div className='bg-slate-200'>
      <Home></Home>
      <Blogs></Blogs>
    </div>
  );
}

export default App;
