import './css/App.css'
import Home from './pages/Home'
import Notes from './pages/Notes'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

export default function App() {
    return (
      <div className='App'>
        <Navbar/>
        <div className='app-body'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/notes' element={<Notes/>} />
        </Routes>
        <Footer/>
        </div>
      </div>
    );
}