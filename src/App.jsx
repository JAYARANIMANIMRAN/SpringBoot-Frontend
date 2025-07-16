import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/signup';
import Add from './components/Add';
import Employee from './components/Employee';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);


  return (

    <>

      <BrowserRouter>

        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

        <Routes>

          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/Employee" element={<Employee />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;