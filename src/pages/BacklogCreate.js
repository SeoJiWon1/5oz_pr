import './BacklogCreate.css';
import {Link, useNavigate } from 'react-router-dom';
import axios from'axios';
import GetMe from './GetMe';
import {useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form';

function BacklogCreate(){

    useEffect(() => {
        GetMe();
    }, [] );

    const [projectTitle, setProjectTitle] = useState([]);
    const [seqCount, setSeqCount] = useState([]);
    const [selectedValue, setSelectedValue] = useState("");

    useEffect(() => {
        async function getProjectTitle() {
          try {
            const accessToken = localStorage.getItem("access_token");
            const res = await axios.get('http://localhost:8080/api/projects',
              {
                headers:{
                  Authorization: `Bearer ${accessToken}`
                },
              });
            setProjectTitle(res.data);
            setSeqCount(res.data[0].seq);
            console.log(projectTitle);
            console.log(res.data[0].seq);
            ///console.log(projectTitle[0].title);
          } catch (error) {
            console.log(error);
          }
        }
        getProjectTitle();
      }, []);

    const navigate = useNavigate();
    const[백로그명, 백로그명변경] = useState("");
    const[상세설명, 상세설명변경] = useState("");
    const[date, changeDate ] = useState("");

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
        postBacklogCreate();
    }

    function postBacklogCreate(){
        const accessToken = localStorage.getItem("access_token");
        axios.post('http://localhost:8080/api/backlogs',
        {
            "title" : 백로그명,
            "description" : 상세설명,
            "deadline" : date,
            "projectSeq" : 1,
            "projectTitle" : selectedValue
            
        },
        {
            headers:{
              Authorization: `Bearer ${accessToken}`
            }}
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
                <h3 className = 'text-title-1'>백로그 설정</h3>
            </div>

            <div className='container-bck-select'>
                <Form.Label>Project Select</Form.Label>
                <Form.Control as="select" value={selectedValue} onChange={handleProjectChange}>
                    <option>Select Project</option>
                        {projectTitle.map((project, index) => (
                        <option key={project.seq} value={projectTitle[index].title}>
                        {projectTitle[index].title}
                    </option>
                        ))}
                </Form.Control>
            </div>

            <div className = 'container-bck-title'>
                <div className = 'container-bck-title-a'>
                    <h6 className = 'text-title-2'>백로그 명*</h6>
                    <input className="input-bck-title"
                            type = "text"
                            value = {백로그명}
                            onChange =  {backlogTitle}
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
                    <label htmlFor="example-date" className="form-label">종료 일자</label>
                    <input 
                        className="form-bck-control" 
                        id="example-date" 
                        type="date" 
                        name="date"
                        value = {date}
                        onChange = {handleDateChange}
                        />
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

export default BacklogCreate;