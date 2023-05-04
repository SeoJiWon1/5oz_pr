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
  const originData = 'client_id:client_secret';
    

    //accesstoken 요청 함수
    function getToken(){
      //const expiresIn = localStorage.getItem(res.data.expires_in); // 토큰 만료 시간
      
      console.log(window.btoa(originData));
  
      axios.post('http://localhost:8080/oauth/token?grant_type=password&username=test1&password=test2',
        {},
        {
          headers:{ 
            'Authorization': 'Basic '+window.btoa(originData)} 
        }
      ).then( res => {
        console.log(res);
        if(res.status === 200 ) {
          localStorage.setItem("access_token", res.data.access_token);
          localStorage.setItem("refresh_token", res.data.refresh_token);
          navigate("/ProjectSelect");
          getMe();
        // handleLoginSuccess(res);
        
        }
      })
      .catch((error) => {
        console.log(error);
        alert('아이디 또는 패스워드를 확인해주세요')
        });
    }
    

  // 로그인 성공했을 때 처리 
  // function handleLoginSuccess(res){
  //   dispatch(setLoggedIn(true));
  //   navigate("/ProjectSelect");
  //   getMe(res);
    
  // }
 
  function getMe(res){

    const accessToken = localStorage.getItem("access_token");
    axios.get('http://localhost:8080/me',
    {
      headers:{
        Authorization: `Bearer ${accessToken}`
      },
    })
    .then(res => {
      console.log(res.status);
      if(res.status !== 200){
          getRefresh();
      }else{
        console.log('로그인 성공');
      }
      
    })
    .catch((error)=> {
      console.log(error);
      // if (error.response.status === 401) {
      //   axios
      //       .post(
      //         "http://localhost:8080/oauth/token?grant_type=password&username=test1&password=test2",
      //         {},
      //         {
      //           headers: {
      //             'Authorization': 'Basic '+window.btoa(originData)
      //           },
      //         }
      //       )

      // }
    })
  }

  function getRefresh(){

    const refreshToken = localStorage.getItem("refresh_token");
    axios.post('http://localhost:8080/oauth/token?grant_type=refresh_token&refresh_token='+refreshToken,
    {
      headers:{
        'Authorization': 'Basic '+window.btoa(originData)
      },
    })
    .then(res => {
      console.log(res.status);
      if(res.status === 200){
          localStorage.setItem("access_token", res.data.access_token);
          localStorage.setItem("refresh_token", res.data.refresh_token);
      }else{
        console.log('logout');
      }
      
    })
    .catch((error)=> {
      console.log(error);
      // if (error.response.status === 401) {
      //   axios
      //       .post(
      //         "http://localhost:8080/oauth/token?grant_type=password&username=test1&password=test2",
      //         {},
      //         {
      //           headers: {
      //             'Authorization': 'Basic '+window.btoa(originData)
      //           },
      //         }
      //       )

      // }
    })
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