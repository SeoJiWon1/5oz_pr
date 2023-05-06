import './ProjectSelect.css';
import {Link} from 'react-router-dom';
import axios from'axios';
import { useNavigate } from "react-router-dom";

function ProjectSelect(){
    const navigate = useNavigate();
    const originData = 'client_id:client_secret';

    function getMe(){
        const accessToken = localStorage.getItem("access_token");
        console.log(accessToken);
        axios.get('http://localhost:8080/me',
        {
          headers:{
            Authorization: `Bearer ${accessToken}`
          },
        })
        .then(res => {
          console.log(res.status);
          if(res.status === 200){
              console.log('access_token이 유효합니다.');
              navigate("/ProjectCreate");
          }
          
        })
        .catch((error)=> {
          console.log(error);
          if(error.response.status ===401 ){
            console.log('401 에러입니다');
            getRefresh();
          }
        })
    
        function getRefresh(){
            const refreshToken = localStorage.getItem("refresh_token");
            console.log(refreshToken);
            axios.post('http://localhost:8080/oauth/token?grant_type=refresh_token&refresh_token='+refreshToken,
            {},
            {
                headers:{
                'Authorization': 'Basic '+window.btoa(originData)}
            }
            ).then(res => {
                console.log(res);
                if(res.status === 200){
                    localStorage.setItem("access_token", res.data.access_token);
                    localStorage.setItem("refresh_token", res.data.refresh_token);
                    navigate("/ProjectCreate");
                }else{
                console.log('logout');
                navigate("/Login");
                }
                
            })
            .catch((error)=> {
                console.log(error);
            })
            }
         }

    return(

        <div className='header-container'>
            <div className = "header-text">
                프로젝트
            </div>
            <button className="header-btncrt" onClick ={getMe}>프로젝트 만들기</button>
        </div>
    );

}

export default ProjectSelect;
