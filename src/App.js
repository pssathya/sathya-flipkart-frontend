import { Box } from '@mui/material';

import './App.css';

import Header from './components/header/Header';
import Home from './components/home/Home';
import DataProvider from './context/ContextProvider';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Home />
        </Box>
      </DataProvider>
    </div>
  );
}

export default App;
