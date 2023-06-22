import {BrowserRouter, Routes, Route} from 'react-router-dom'

// pages and components
import Home from './pages/Home'
// @ts-ignore bc for some reason it doesn't like Navbar
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
