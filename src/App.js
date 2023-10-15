import './App.css';
import Home from './components/Home';
import {Route,Routes} from'react-router-dom';
import Electronics from'./components/Electronics';
import Cloths from'./components/Cloths';
import Furniture from'./components/Furniture';
import Vegitables from'./components/Vegitables';
import Add from'./components/Add';




function App() {
  return (
    <div className="App">
      
      
<Routes>
  <Route path='/'  element={<Home/>}></Route>
  {/* <Route path='/electr' element={<Electronics/>}></Route> */}
  <Route path='/clt' element={<Cloths/>}></Route>
  <Route path='/furt' element={<Furniture/>}></Route>
  <Route path='/vgtb' element={<Vegitables/>}></Route>
<Route path='/electr' element={<Electronics></Electronics>}></Route>
<Route path='/add' element={<Add></Add>}></Route>

</Routes>
    </div>
  );
}


export default App;
