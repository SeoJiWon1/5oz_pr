import axios from'axios';
import { Await, useNavigate, useLocation, Link } from "react-router-dom";
import {useEffect, useState} from 'react';
import GetMe from './GetMe';


function BacklogView(){
    const navigate = useNavigate();
    const location = useLocation();
    const seq = location.state.seq;
    const [backlog, setBacklog] = useState([]);
    useEffect(() => {
        GetMe();
        
    }, [] );

    

    useEffect(() => {
        async function fetchData(seq) {
          try {
            const accessToken = localStorage.getItem("access_token");
            const response = await axios.get(
              "http://localhost:8080/api/backlogs/view/"+seq,
              {
                // params: {
                //   nb_seq: seq,
                // },
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }
            );
            setBacklog(response.data);
            console.log(response.data);
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
            "http://localhost:8080/api/backlogs",
            {
              params: {
                nb_seq: seq,
              },
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          ).then(() => {
            navigate("/BacklogSelect");
          });
        } catch (error) {
          console.log(error);
        }
      }

      function handleClick(seq) {
        console.log(seq);
        navigate("/BacklogEdit", { state: { seq } });
        console.log(seq);
      }

    return(
        <div className="container-all">
            <Link to="/BacklogSelect" className = "link">뒤로 가는 버튼 위치</Link>
            <div className="container-pr">
                <div className="container-pr-left">
                    <div></div>
                    <h3>백로그 </h3>
                    <h6>백로그 제목</h6>
                    <div className='backlogselect-card-title'>
                      <h2>{backlog.title}</h2>
                    </div>

                    <div className = 'backlogselect-card-content'>
                      <p>목적: {backlog.description}</p>
                    </div>

                    <div className = 'backlogselect-card-deadline'>
                      deadline: 
                      {backlog.deadline}
                    </div>

                    <div className = 'backlogselect-card-deadline'>
                      projetTitle: 
                      {backlog.projectTitle}
                    </div>

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

export default BacklogView;