import './ProjectSelect.css';
import axios from'axios';
import { Await, useNavigate } from "react-router-dom";
import {useEffect, useState} from 'react';

function ProjectSelect(){
    const navigate = useNavigate();
    const [projects, setProjects] = useState(null);

    // 만들기 눌렀을 때 이동함수    
    function navigateProjectCreate(){
        navigate('/ProjectCreate');
      }
         
      async function getProject() {
      try {
        const response = await axios.get('http://localhost:8080/projects');
        setProjects(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    return(
        <div>
          <div className='header-container'>
              <div className = "header-text">
                  프로젝트
              </div>
             
              <button className="header-btncrt" onClick ={navigateProjectCreate}>프로젝트 만들기</button>
          </div>

          <div>
            여기도 공간입니다
              <ul onClick={getProject}>
              <hr></hr>
                이곳
              {projects && projects.map((project) => (
              <li key={project.seq}>{project.seq}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{project.title}<hr></hr></li>
            ))}
              </ul>
          </div>
        </div>




            
          

            
    );

}

export default ProjectSelect;
