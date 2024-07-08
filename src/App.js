import logo from './logo.svg';
import './App.css';
import{ BrowserRouter, Route, Routes }from 'react-router-dom'
import Home from './page/Home';
import About from './page/About';
import Navbar from './common/Navbar';
import SingleRecipe from './page/SingleRecipe';

function App() {
  return (
    <div className="App">
  
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/about'element={<About/>}/>
      <Route path='/Single'element={<SingleRecipe/>}/>

    </Routes>
    </BrowserRouter>
  
    </div>
  );
}
export default App;
