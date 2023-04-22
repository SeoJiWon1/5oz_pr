import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header';
import Login from './pages/Login.js';
import Slidebar from './pages/Slidebar.js';
import Nav from 'react-bootstrap/Nav';
import {Routes, Route, Link} from 'react-router-dom';
import Sidenav from "./pages/Sidenav";

function App() {
  return (
      <Routes>
        <Route path = "/" element ={
          <div>
            <Nav className =" header-all">
              <Nav.Item className = "header-logo">
                <Nav.Link href="/">5OzSoftware</Nav.Link>
                <Nav.Item >
                  <Nav.Link href="/Login"><button className="header-login">로그인</button></Nav.Link>
                  <Link to="/Register"><button className="header-register">회원가입</button></Link>
                </Nav.Item>   
              </Nav.Item>  
            </Nav>
        
        <div className = "main-text">5Oz Sofware의 제품을 만나보세요! </div>
        <Slidebar></Slidebar>          
          </div>
        }/>
          
        <Route path ="/Login" element={<Login></Login>} />
        <Route path = "ProjectSelect" element = {
          <div>
            <Header/>
            <div className='header-container'>
              <div className = "header-text">
                프로젝트
              </div>
              <button className="header-btncrt">프로젝트 만들기</button>
            </div>
          </div>}
        />
        <Route path ="/Main" element={[
          <Header></Header>, 
          <Sidenav></Sidenav>
          
        ]} />
        
      </Routes>
    
  );
}

export default App;
