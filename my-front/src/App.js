// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  Navbar,
  Container,
  Nav,
} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import { useState } from 'react';


function App() {
  const navigate = useNavigate();
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setAuth(true)
    } else {
      setAuth(false)
    }
  });


  const handleLogout = (ev) => {
    ev.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setAuth(false);
    navigate('/');
  }

  return (
    <div className="App">
      <Navbar bg='light' variant='light'>
        <Container>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Главная</Link>
            {/* <Link to="/apartment/1" className="nav-link">Квартира 1</Link> */}
          </Nav>
          <Nav className='jastify-content-end'>
            {!isAuth ? (<>
              <Link to="/reg" className="nav-link">Регистрация</Link>
              <Link to="/login" className="nav-link">Войти</Link>
            </>) : (<>
              <Link to="/profile" className="nav-link">Профиль</Link>
              <Nav.Link href="#" onClick={handleLogout}>Выход</Nav.Link>
            </>)
            }
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <Outlet />
      </Container>

    </div >
  );
}

export default App;
