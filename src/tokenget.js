import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios'


function App() {

  function getMe(){
    axios.get('http://localhost:8080/me',
    {
      headers:{
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJ0ZXN0MSIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJuYW1lIjoidGVzdCIsInVzcklkIjoidGVzdDEiLCJleHAiOjE2ODI2NjQ3NDMsImF1dGhvcml0aWVzIjpbIlNVUEVSIl0sImp0aSI6ImFmZjFkZDNmLTkzNTQtNDkwYS04YjRjLTk4ZDQ5MmZhY2RkYyIsImNsaWVudF9pZCI6ImNsaWVudF9pZCJ9.5o589dnAhk401kOXh04kb3evoNS9klK-YPCBcBbFdvU'
      }
    }
    ).then(res => {
      console.log(res);
    })
  }

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
    })
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button onClick={getToken}>토큰얻기</Button>
        <Button onClick={getMe}>토큰확인</Button>
      </header>
    </div>
  );
}

export default App;
