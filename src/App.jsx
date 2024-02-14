import './App.css';
import Header from './Components/Header';
import Footer from'./Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Add from './Pages/Add';
import Contact from './Pages/Contact';
import View from './Pages/View';
import Edit from './Pages/Edit';
function App() {
  return (
    <div className="App">
      <Header/>

        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/add' element={<Add/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/view/:id' element={<View/>} />
          <Route path='/edit/:id' element={<Edit/>} />
          
        </Routes>

      <Footer/>

    </div>
  );
}

export default App;
