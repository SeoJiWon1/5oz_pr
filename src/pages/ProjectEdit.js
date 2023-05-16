import './ProjectCreate.css';
import {Link, useNavigate, useLocation } from 'react-router-dom';
import { FcBrokenLink } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import {useState, useEffect} from 'react';
import axios from'axios';
import GetMe from './GetMe';


function ProjectEdit(){
    const location = useLocation();
    const seq = location.state.seq;
    useEffect(() => {
        GetMe();
        
    }, [] );

    const navigate = useNavigate();
    const[프로젝트명, 프로젝트명변경] = useState([]);
    const[관리자, 관리자명변경] = useState([]);
    const[project, setProject] = useState([]);

    
    useEffect(() => {
      async function fetchData() {
        try {
          const accessToken = localStorage.getItem("access_token");
          const response = await axios.get(
            "http://localhost:8080/api/projects/view/" +location.state.seq,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          setProject(response.data);
          console.log(response.data);
          프로젝트명변경(response.data.title);
          console.log(프로젝트명);
          관리자명변경(response.data.assign);
        } catch (error) {
          console.log(error);
        }
      }
    
      fetchData(seq);
    }, [] );

      function putProjectEdit(){
        const accessToken = localStorage.getItem("access_token");
        axios.put(
            'http://localhost:8080/api/projects/'+location.state.seq,
            {
              "title": 프로젝트명
              //"assign": "프로젝트 설명"
            },
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          ).then(res => {
            console.log(res);
            navigate("/ProjectSelect");
          }).catch(error => {
            console.log(error);
            console.log('에러입니다');
          });
    }

        // 값 입력 시 프로젝트 명 변경됨
        const projectTitle = (e) =>{
          프로젝트명변경(e.target.value);
      }
  
      // 확인 버튼 누를 때 프로젝트 명 변경 후
      function submitProjectEidt(e) {
          //e.preventDefault();
          putProjectEdit();
      }
    return (
    <div className = "container-all">
        <Link to="/ProjectSelect" className = "link"> 프로젝트 유형으로 돌아가기</Link>
        <div className ='container-pr'>
            <div className='container-pr-left'>
                <h3 className= 'container-text1'>프로젝트 설정</h3>
                <h6 className= 'container-text2'>프로젝트 명*</h6>
                <input 
                  className="input-title"
                  type="text"
                  value={프로젝트명}
                  onChange={(e) => projectTitle(e)}
                />
                <h6 className='container-text3'>프로젝트 참여자: {관리자}</h6>
                
                <button onClick = {submitProjectEidt} className='check'>확인</button>
            </div>
  
        </div>
    </div>  
    );
}
export default ProjectEdit;