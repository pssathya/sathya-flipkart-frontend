import { Box } from '@mui/material';

import './App.css';

import Header from './components/header/Header';
import Home from './components/home/Home';
import DataContext from './context/ContextProvider';

function App() {
  return (
    <div className="App">
      <DataContext>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Home />
        </Box>
      </DataContext>
    </div>
  );
}

export default App;
