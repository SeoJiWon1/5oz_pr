import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import { useState } from "react";
import axios from'axios';
import { useNavigate } from "react-router-dom";
//import refreshToken from "../path/to/utils";
import { setLoggedIn } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    //accesstoken 요청 함수
    function getToken(){
      const originData = 'client_id:client_secret';
      console.log(window.btoa(originData));
  
      axios.post('http://localhost:8080/oauth/token?grant_type=password&username=test1&password=test2',
        {},
        {
          headers:{ 
            'Authorization': 'Basic '+window.btoa(originData)} 
        }
      ).then( res => {
        console.log(res);
        getMe();
        localStorage.setItem("access_token", res.data.access_token);

      })
    }
    //accesstoken 확인 함수
    function getMe(){
      axios.get('http://localhost:8080/me',
      {
        headers:{
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJ0ZXN0MSIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJuYW1lIjoidGVzdCIsInVzcklkIjoidGVzdDEiLCJleHAiOjE2ODI5MDk2MDMsImF1dGhvcml0aWVzIjpbIlNVUEVSIl0sImp0aSI6ImNjNzE1OTc2LWI3MmYtNDBlNy1iMDg2LWRjYTI3NTFlZjUyOCIsImNsaWVudF9pZCI6ImNsaWVudF9pZCJ9.46pgHKmaSuJyRNq_gQs8ZbVJrtsQukwXGGo5ca-Mg9g'
        }
      }
      ).then(res => {
        console.log(res.status);
        if(res.status == 200){
          handleLoginSuccess(res);
        }
      }).catch(error => {
        console.log(error);
        alert('토큰이 만료되었습니다. 다시 발급 받아주세요!')
      })
    }  

  // 로그인 성공했을 때 처리 
  function handleLoginSuccess(res){
    dispatch(setLoggedIn(true));
    navigate("/ProjectSelect");
  }
  
 
  return (    
      <div className="Login-all">
        <div className="Login-Logo">5oz</div>
        <Form className="form" >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" defaultValue="test1" placeholder="xxxx@ozsoftware.com" />
            <Form.Text className="text-muted">
              고객님의 정보는 공유되지 않습니다.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" defaultValue="test2"  placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="아이디 저장" />
          </Form.Group>
          <Button variant="primary" type="button" className="btn-log" onClick={getToken}>
            Login
          </Button>
        </Form>
      </div>
    
  );
}

export default Login;