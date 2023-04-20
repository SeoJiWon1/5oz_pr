import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import axios from'axios';
import { useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../redux/Store';
import { setToken } from '../path/to/setToken'; // setToken 함수를 import
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  function usernameChange(e) {
    setUsername(e.target.value);
  }

  function passwordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // if (!username || !password ){
    //   alert('이메일과 비밀번호를 적어주세요');
    // }
    axios.post('http://localhost:8080/api/post/01', { username, password }, {
    headers: {
    'Content-Type': 'application/json'
    }
    })
    // 로그인 요청을 보내고 JWT 토큰을 받아옴
    .then(response => {
      localStorage.setItem('token', response.data.token);
      // JWT 토큰을 로컬 스토리지에 저장
      dispatch(setToken(response.data.token)); // redux 액션 호출하여 토큰 상태 업데이트
      navigate("/ProjectSelect"); // "/ProjectSelect" 경로로 페이지 이동
      // 로그인 성공 후의 처리를 진행 (예 : 페이지 이동)
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