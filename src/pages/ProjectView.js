import axios from'axios';
import { Await, useNavigate, useLocation, Link } from "react-router-dom";
import {useEffect, useState} from 'react';
import GetMe from './GetMe';

function ProjectView (){
  const navigate = useNavigate();
    const [project, setProject] = useState([]);
    const location = useLocation();
    const seq = location.state.seq;

    useEffect(() => {
      GetMe();
      
  }, [] );

  useEffect(() => {
    async function fetchData(seq) {
      try {
        const accessToken = localStorage.getItem("access_token");
        const response = await axios.get(
          "http://localhost:8080/api/projects/view/"+location.state.seq,
          {
            params: {
              np_seq: seq,
            },
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setProject(response.data);
        console.log(response.data);
        //console.log(project.accountProjects[0].accounts.userId);
        // console.log(project.accountProjects.)
      } catch (error) {
        console.log(error);
      }
    }
  
    fetchData(seq);
  }, [] );

  function deleteData(seq) {
    try {
      const accessToken = localStorage.getItem("access_token");
      axios.delete(
        "http://localhost:8080/api/projects/"+location.state.seq,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      ).then(() => {
        navigate("/ProjectSelect");
      });
    } catch (error) {
      console.log(error);
    }
  }
  
  // fetchData(seq);

  function handleClick(seq) {
    navigate("/ProjectEdit", { state: { seq } });
  }
    return(
        <div className="container-all">
            <Link to="/ProjectSelect" className = "link">뒤로 가는 버튼 위치</Link>
            <div className="container-pr">
                <div className="container-pr-left">
                    <div></div>
                    <h3>프로젝트 설정</h3>
                    <h6>프로젝트 명</h6>
                    {/* {seq} */}
                    {project.title}
      
                    <h6>프로젝트 관리자</h6>
                    {project.assign}
                    
                </div>
                <div className='container-pr-right'>
                <div className="btn-right">
                  <button className='btn-cancel' onClick={() => handleClick(seq)}>수정</button>
                  <button className='check' onClick={() => deleteData(seq)}>삭제</button>
                </div>
              </div>
            </div>
        </div>
    );
}

export default ProjectView;