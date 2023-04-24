import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import axios from'axios';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../redux/Store';
// import { setToken } from '../path/to/setToken'; // setToken 함수를 import
import { useNavigate } from "react-router-dom";
import refreshToken from "../path/to/utils";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  
  function usernameChange(e) {
    setUsername(e.target.value);
  }

  function passwordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = {username, password};
    // if (!username || !password ){
    //   alert('이메일과 비밀번호를 적어주세요');
    // }
    axios.post('http://localhost:8080/api/post/01',data, {
    headers: {
    'Content-Type': 'application/json'
    }
    })
    .then(response => {
      axios.defaults.headers.common['Authorization']=`Bearer ${response.data.accesstoken}`; //'Bearer' + response.data;
      // 'axios.post요청이 성공했을 때 'Authorization' 헤더에  Bearer 타입의 acceesstoken 값을 설정하여 서버에 인증을 요청하고 있는 것
      localStorage.setItem('accesstoken', response.data.accesstoken);
      // access 토큰을 로컬 스토리지에 저장
      navigate("/ProjectSelect"); // "/ProjectSelect" 경로로 페이지 이동
      // 로그인 성공 후의 처리를 진행 (예 : 페이지 이동)
      setTimeout(function(){
        refreshToken(null);
      }, (60 * 1000));
    })
    .catch(error => {
      alert('존재하지 않는 아이디이거나 비밀번호가 다릅니다.')
    })
}

  return (
    <PersistGate persistor={persistor}>
      <div className="Login-all">
        <div className="Login-Logo">5oz</div>
        <Form className="form" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={username} onChange={usernameChange} placeholder="xxxx@ozsoftware.com" />
            <Form.Text className="text-muted">
              고객님의 정보는 공유되지 않습니다.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} onChange={passwordChange} placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="아이디 저장" />
          </Form.Group>
          <Button variant="primary" type="submit" className="btn-log">
            Login
          </Button>
        </Form>
      </div>
    </PersistGate>  
  );
}

export default Login;