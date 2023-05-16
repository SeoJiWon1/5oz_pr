import './ProjectSelect.css';
import axios from'axios';
import { Await, useNavigate } from "react-router-dom";
import {useEffect, useState} from 'react';
import GetMe from './GetMe';

function ProjectSelect(){
    useEffect(() => {
        GetMe();
        
    }, [] );
    const navigate = useNavigate();
    const [projects, setProjects] = useState(null);
    const [project, setPrject] = useState(true);
    const [userId, setUserId] = useState(null);
    const [ProjectSeq, setProjectSeq] = useState(null);

         useEffect(() => {
          async function fetchData() {
            try {
              const accessToken = localStorage.getItem("access_token");
              const response = await axios.get('http://localhost:8080/api/projects',
              {
                headers:{
                  Authorization: `Bearer ${accessToken}`
                },
              });
              setProjects(response.data);
              // if(projects !== null)
              //   setPrject(true);
              // else
              //   setPrject(false);
            } catch (error) {
              console.log(error);
            }
          }
          fetchData();
        }, []); // 의존성 배열은 빈 배열로 지정
        
        function projectView(){
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
              navigate("/ProjectView");
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
                    navigate("/ProjectView");
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

        function handleClick(e) {
          const seq = e.currentTarget.dataset.seq;
          navigate("/ProjectView", { state: { seq } });
        }

    return(

        <div className='header-container'>
            <div className = "header-text">
                프로젝트
            </div>
            <button className="header-btncrt" onClick ={getMe}>프로젝트 만들기</button>
            <div>
              {
                project === true?<GetProject projects={projects} handleClick={handleClick}></GetProject>:null
              }
              {
                
              }

            </div>
        </div>
    );

}

function GetProject(props){

  return(
    <div>
      <table>
        <thead>
          <tr>
            <th style={{width:"100px"}}>번 호</th>
            <th style={{width:"200px"}}>프로젝트명</th>
            <th style={{width:"150px"}}>생성 일자</th>
          </tr>
        </thead>
        <tbody>
          {props.projects && props.projects.map((project, number) => (
            <tr key={project.seq} data-seq={project.seq} onClick={props.handleClick}>
              <td>{number+1}</td>
               <td>{project.title}</td> 
              <td>{project.savedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProjectSelect;