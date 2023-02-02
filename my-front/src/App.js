// import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import {
  Navbar,
  Container,
  Nav,
} from 'react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'


function App() {
  return (
    <div className="App">
      <Navbar bg='light' variant='light'>
        <Container>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Главная</Link>
            <Link to="/profile" className="nav-link">Профиль</Link>
            <Link to="/apartment/1" className="nav-link">Квартира 1</Link>
          </Nav>
          <Nav className='jastify-content-end'>
            <Link to="/reg" className="nav-link">Регистрация</Link>
            <Link to="/login" className="nav-link">Войти</Link>
            <Link to="/logout" className="nav-link">Выход</Link>
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
