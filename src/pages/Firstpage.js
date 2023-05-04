import './Firstpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';



function Firstpage() {
    return(
        <div>
            <Nav className =" header-all">
              <Nav.Item className = "header-logo">
                <Nav.Link href="/">5OzSoftware</Nav.Link>
                <Nav.Item >
                  <Nav.Link href="/Login"><button className="header-login">로그인</button></Nav.Link>
                  <Link to="/SignUp"><button className="header-register">회원가입</button></Link>
                </Nav.Item>   
              </Nav.Item>  
            </Nav>
            <div className = "main-text">5Oz Sofware의 제품을 만나보세요! </div>         
        </div>
    );
}
export default Firstpage;
