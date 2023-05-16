import './ProjectCreate.css';
import {Link, useNavigate, useLocation } from 'react-router-dom';
import { FcBrokenLink } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import {useState, useEffect} from 'react';
import axios from'axios';
import GetMe from './GetMe';
import Form from 'react-bootstrap/Form';

function BacklogEdit(){
    //const navigate = useNavigate();
    const location = useLocation();
    // const seq = location.state.state;
    
    useEffect(() => {
        GetMe();
    }, [] );

    const [projectTitle, setProjectTitle] = useState([]);
    const [seqCount, setSeqCount] = useState([]);
    const [selectedValue, setSelectedValue] = useState("");
    const navigate = useNavigate();
    const[백로그명, 백로그명변경] = useState("");
    const[상세설명, 상세설명변경] = useState("");
    const[date, changeDate ] = useState("");
    const[프로젝트명, 프로젝트명변경] = useState("");

    useEffect(()=>{
      async function getBacklog() {
        console.log(location.state.seq);
          try {
            const accessToken = localStorage.getItem("access_token");
            const res = await axios.get('http://localhost:8080/api/backlogs/view/'+location.state.seq,
              {
                headers:{
                      Authorization: `Bearer ${accessToken}`
                },
              });
              console.log(location.state.seq);
              console.log(res.data);
            setProjectTitle(res.data);
            setSeqCount(res.data.seq);
            // console.log(projectTitle);
            console.log(res.data.deadline);
            백로그명변경(res.data.title);
            상세설명변경(res.data.description);
            changeDate(res.data.deadline);
            프로젝트명변경(res.data.projectTitle);
          } catch (error) {
            console.log(error);
          }
        }
        getBacklog();
      }, [] );
          

    const backlogTitle = (e) =>{
        백로그명변경(e.target.value);
    }

    const backlogDetail =(e) =>{
        상세설명변경(e.target.value);
    }

    const handleDateChange = (e) => {
        changeDate(e.target.value);
    }

    const handleProjectChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedValue(selectedValue);
        console.log(selectedValue);
    }

    function submitBacklog(e) {
        e.preventDefault();
        putBacklogUpdate();
    }

    function putBacklogUpdate(){
        const accessToken = localStorage.getItem("access_token");
        axios.put('http://localhost:8080/api/backlogs/'+location.state.seq,
        {
            "title" : 백로그명,
            "description" : 상세설명,
            "deadline" : date,
            
        },
        {
            headers:{
              Authorization: `Bearer ${accessToken}`
            }
          }
        ).then(res =>{
            console.log(res);
            navigate("/BacklogSelect");
        })
        .catch((error) => {
            console.log(error);
            console.log('에러입니다');
            

        })
    }

   return(
    <div className = "container-all">
        <Link to="/BacklogSelect" className = "link"> 백로그로 돌아가기</Link>
        <div className = 'container-backlog'>
            <div className = 'container-bck-header'>
                <h3 className = 'text-title-1'>백로그 수정하기</h3>
            </div>

            <div className = 'container-bck-title'>
                <div className = 'container-bck-title-a'>
                    <h6 className = 'text-title-2'>백로그 명*</h6>
                    <input className="input-bck-title"
                            type = "text"
                            value = {백로그명}
                            onChange = {backlogTitle}
                    />
                </div>    
            </div>

            <div className = 'container-bck-textarea'>
                <div className ="mb-3">
                <label htmlFor="example-textarea" className="form-label">상세 설명</label>
                <textarea className = "form-bck-control"
                    type = "text"
                    value = {상세설명}
                    onChange = {backlogDetail}
                
                />
                </div>
            </div>
            
            <div className = 'container-bck-enddate'>
                <div className="mb-3">
                    <label htmlFor="example-date" className="form-label">Date</label>
                    <input 
                        className="form-bck-control" 
                        id="example-date" 
                        type="date" 
                        name="date"
                        value = {date}
                        onChange = {handleDateChange}
                        />
                </div>

                <div className='container-bck-select'>
                {프로젝트명}
                </div>

            </div>

            <div className="btn-right">
                <button className='btn-cancel'>취소</button>
                <button onClick = {submitBacklog} className='check'>확인</button>
            </div>    
        </div>
    </div>
   )
}

export default BacklogEdit;