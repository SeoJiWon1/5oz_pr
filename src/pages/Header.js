import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { BsFillBellFill } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";


function Header() {
  return (
    <Nav className =" Nav-all"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item className = "Nav-logo">
        <Nav.Link href="/home" className = "Logo">5Oz Software</Nav.Link>
      </Nav.Item>

      <Nav className='Nav-type'>
        <Nav.Item>
          <Nav.Link eventKey="link-1">App Name</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">My project</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">프로젝트</Nav.Link>
        </Nav.Item>
        

        <Nav className ='Nav-setting'>
          <Nav.Item className = "Nav-icon">
            <BsFillBellFill/>
          </Nav.Item>
          <Nav.Item >
            <Nav.Link eventKey="link-4"> 알림</Nav.Link>
          </Nav.Item>  
          <Nav.Item className = "Nav-icon">
            <BsFillGearFill/>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-5">설정</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-6">계정</Nav.Link>
          </Nav.Item>
        </Nav>
      </Nav>
    </Nav>
    
    
    
  );
}

export default Header;
