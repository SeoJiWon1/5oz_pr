import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { BsFillBellFill } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";
import { FaHatWizard, FaUser} from "react-icons/fa";
import React,{useState} from 'react';

function Header() {

  const [modal, setModal] = useState(false);
  

  return (
    <Nav className ="nav-all">
      <Nav.Item>
        <Nav.Link href="/" className = "logo"><FaHatWizard></FaHatWizard> 5Oz</Nav.Link>
      </Nav.Item>
      <Nav className='nav-type'>
        <Nav.Item>
          <Nav.Link className='nav-type-text'>내 작업</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='nav-type-text'>프로젝트</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='nav-type-text'>팀</Nav.Link>
        </Nav.Item>
        

        <Nav className ='nav-setting'>
          <Nav.Item className = "nav-icon">
            <BsFillBellFill/>
          </Nav.Item>
          {/* <Nav.Item >
            <Nav.Link> 알림</Nav.Link>
          </Nav.Item>  
          <Nav.Item className = "nav-icon">
            <BsFillGearFill/>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>설정</Nav.Link>
          </Nav.Item>
          <Nav.Item className = "nav-icon">
            <FaUser/>
          </Nav.Item> */}
          <Nav.Item>
            <Nav.Item >
              {/* <div onClick={()=> {modal === true ? setModal(false) : setModal(true)}}>
                계정
              </div> */}
              {/* <div>
                {modal === true ? <Modal/> : null}
              </div> */}
            </Nav.Item>
          </Nav.Item>
        </Nav>
      </Nav>
    </Nav>
  );
}


function Modal(){
  return(
    <div className='modal-logout'>
      로그아웃
    </div>

  )
}


export default Header;
