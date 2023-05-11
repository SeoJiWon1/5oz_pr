import './BacklogCreate.css';
import {Link, useNavigate } from 'react-router-dom';
import axios from'axios';
import GetMe from './GetMe';
import {useEffect, useState} from 'react';


function BacklogCreate(){

    useEffect(() => {
        GetMe();
    }, [] );

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

    function submitBacklog(e) {
        e.preventDefault();
        postBacklogCreate();
    }

    function postBacklogCreate(){
        axios.post('http://localhost:8080/backlogs',
        {
            "title" : 백로그명,
            "deadline" : date,
            "description" : 상세설명,
            "projectSeq" : 1
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
                <h3 className = 'text-title-1'>백로그 설정</h3>
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
