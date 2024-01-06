import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Main';
import NoPage from './pages/NoPage';
import Create from './pages/Create';
import Update from './pages/Update';
import Read from './pages/Read_data';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/main" element={<Main/>}/>
          <Route path='*' element={<NoPage />} />
          <Route path='/create' element={<Create />}/>
          <Route path='/read' element={<Read />}/>
          <Route path='/update' element={<Update />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
