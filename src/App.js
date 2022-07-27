import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <>
      {authIsReady && (
        <BrowserRouter>
          <div className="App">
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={!user ? <Login /> : <Home />} />
            <Route path="/signup" element={!user ? <Signup /> : <Home />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
