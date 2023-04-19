import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header';
import Login from './pages/Login.js';
import Slidebar from './pages/Slidebar.js';
import Sidebar from './pages/Sidebar.js';
import Nav from 'react-bootstrap/Nav';
import { BsFillPersonFill } from "react-icons/bs";
import {Routes, Route, Link} from 'react-router-dom';
import Sidenav from "./pages/Sidenav";
import {FaHatWizard} from 'react-icons/bs'

function App() {
  return (
      <Routes>
        <Route path = "/" element ={
          <div>
            <Nav className =" Header-all">
              <Nav.Item className = "Header-Logo">
                <Nav.Link href="/">5OzSoftware</Nav.Link>
                <Nav.Item >
                  <Nav.Link href="/Login"><button className="Header-Login">로그인</button></Nav.Link>
                  <Link to="/Register"><button className="Header-Register">회원가입</button></Link>
                </Nav.Item>   
              </Nav.Item>  
            </Nav>
        
        <div className = "Main-text">5Oz Sofware의 제품을 만나보세요! </div>
        <Slidebar></Slidebar>          
          </div>
        }/>
          
        <Route path ="/Login" element={<Login></Login>} />
        <Route path = "ProjectSelect" element = {
        <div>
          <Header/>
          <div className='table'></div>
        </div>}/>
        <Route path ="/Main" element={[
          <Header></Header>, 
          <Sidenav></Sidenav>
        ]} />
        
      </Routes>
    
  );
}

export default App;
