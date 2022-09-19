import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material'

import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import DetailView from './components/details/DetailView';
import DataContext from './context/ContextProvider';
import Cart from './components/cart/Cart';

function App() {
  return (
    <div className="App">
      <DataContext>
        <BrowserRouter>
          <Header />
          <Box style={{ marginTop: 54 }}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/product/:id' element={<DetailView />} />
            </Routes>
          </Box>
          <Footer />
        </BrowserRouter>
      </DataContext>
    </div>
  );
}

export default App;
