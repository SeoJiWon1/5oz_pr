import './ProjectSelect.css';
import axios from'axios';
import { Await, useNavigate } from "react-router-dom";
import {useEffect, useState} from 'react';
import GetMe from './GetMe';
function ProjectSelect(){
    const navigate = useNavigate();
    const originData = 'client_id:client_secret';
    const [projects, setProjects] = useState(null);
    const [project, setPrject] = useState(true);
    const [userId, setUserId] = useState(null);
    const [ProjectSeq, setProjectSeq] = useState(null);

  

    useEffect(() => {
      GetMe();
      
  }, [] );
  // 만들기 눌렀을 때 이동함수    
  function navigateProjectCreate(){
    navigate('/ProjectCreate');
  }
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
              console.log(response.data);
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


        function handleClick(e) {
          const seq = e.currentTarget.dataset.seq;
          navigate("/ProjectView", { state: { seq } });
        }

    return(
      <div className = 'header-project'>
        <div className='header-container'>
            <div className = "header-text">
                P R O J E C T
            </div>
            <button className="header-btncrt" onClick ={navigateProjectCreate}>프로젝트 만들기</button>
        </div> 

        <div className='table-project'>
            <GetProject projects={projects} handleClick={handleClick}></GetProject>
        </div>
      </div>
    );

}

function GetProject(props){

  return(
    <div> 
      <table>
        <thead>
          <tr className='projectselect-txt'>
            <th style={{width:"200px"}}>번 호</th>
            <th style={{width:"300px"}}>프로젝트명</th>
            <th style={{width:"300px"}}>시작 일자</th>
            <th style={{width:"300px"}}>종료 일자</th>
          </tr>
        </thead>
        <tbody>
          {props.projects && props.projects.map((project, number) => (
            <tr key={project.seq} data-seq={project.seq} onClick={props.handleClick}>
              <td>{number+1}</td>
               <td>{project.title}</td> 
              <td>{project.savedAt}</td>
              <td>{project.deadline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProjectSelect;
