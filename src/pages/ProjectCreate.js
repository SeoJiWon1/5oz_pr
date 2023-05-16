import './ProjectCreate.css';
import {Link, useNavigate } from 'react-router-dom';
import { FcBrokenLink } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import {useState, useEffect} from 'react';
import axios from'axios';
import GetMe from './GetMe';


function ProjectCreate(){

    useEffect(() => {
        GetMe();
        
    }, [] );

    const navigate = useNavigate();
    const[프로젝트명, 프로젝트명변경] = useState("");
    const[종료일, 종료일변경] = useState("");

    // 값 입력 시 프로젝트 명 변경됨
    const projectTitle = (e) =>{
        프로젝트명변경(e.target.value);
    }

    const handleDeadlineChange = (e) => {
        종료일변경(e.target.value);
        
    }

    function postProjectCreate(){
        const accessToken = localStorage.getItem("access_token");
        axios.post('http://localhost:8080/api/projects',
        {
            "title": 프로젝트명,
            "deadline" : 종료일
            //"assign": "test1"
        },
        {
            headers:{
              Authorization: `Bearer ${accessToken}`
            },
          }
        ).then(res =>{
            console.log(res);
            navigate("/ProjectSelect");
        })
        .catch((error) => {
            console.log(error);
            console.log('에러입니다');
            

        })
    }

    // 확인 버튼 누를 때 프로젝트 명 변경 후
    function submitProjectCreate(e) {
        e.preventDefault();
        postProjectCreate();
    }


    return (
        <div className='projcetcreate-all'>
            <div className = "container-txt">
                <Link to="/ProjectSelect" className = "link"> 프로젝트 유형으로 돌아가기</Link>
                <div className ='container-pr'>
                    <div className='container-pr-left'>
                        <h3 className= 'container-text1'>프로젝트 설정</h3>
                        <h6 className= 'container-text2'>프로젝트 명*</h6>
                        <input className="input-title"
                            type = "text"
                            value = {프로젝트명}
                            onChange = {projectTitle}  
                        />
                        {/* <h6 className='container-text3'>프로젝트 참여자</h6>
                        <input className='input-account'
                            type = "text"
                        /> */}

                    <div className = 'container-pr-enddate'>
                        <div className="mb">
                            <label htmlFor="example-date" className="form-label">Deadline:</label>
                            <input 
                                className="form-pr-control" 
                                id="example-date" 
                                type="date" 
                                name="date"
                                value = {종료일}
                                onChange = {handleDeadlineChange}
                            />
                        </div>
                    </div>
                    </div>

                

                    <div className="container-pr-right">
                        <div className='container-pr-rgtall'>
                            <h6>템플릿</h6>
                            <div className='container-pr-2'>
                                <div className='container-pr-2l'>
                                    <span className="icon-template">
                                    <FcBrokenLink/>
                                    </span>
                                </div>
                                <div className='container-pr-2r'>
                                <span className="icon-text2">Scrum Type</span>
                                </div>
                            </div>
                            <h6 className='t'>유형</h6>
                            <div className='container-pr-3'>
                                <div className='container-pr-3l'>
                                    <span className="icon-category">
                                    <FcConferenceCall/>
                                    </span>
                                </div>
                                <div className='container-pr-3r'>
                                    <div className="icon-text3">팀에서 관리</div>
                                    <div className="icon-text4">팀과 함께 스프린트를 만들고 실행합니다</div>
                                </div>
                            </div>    
                            <div className="btn-right">
                                <button className='btn-cancel'>취소</button>
                                <button onClick = {submitProjectCreate} className='check'>확인</button>
                            </div>    
                        </div>
                    </div>    
                </div>
            </div>
        </div>      
    );
}
export default ProjectCreate;
