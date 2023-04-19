import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { BsFillBellFill } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";
import { FaHatWizard } from "react-icons/fa";

function Header() {
  return (
    <Nav className =" Nav-all">
      <Nav.Item>
        <Nav.Link href="/" className = "Logo"><FaHatWizard></FaHatWizard> 5Oz Software</Nav.Link>
      </Nav.Item>
      <Nav className='Nav-type'>
        <Nav.Item>
          <Nav.Link eventKey="link-1">내 작업</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">프로젝트</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">팀</Nav.Link>
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
