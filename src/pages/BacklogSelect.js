import './BacklogSelect.css';
import axios from'axios';
import GetMe from './GetMe';
import {Link, useNavigate } from 'react-router-dom';
import {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function BacklogSelect(){
    useEffect(() => {
      GetMe();
  }, [] );

  const navigate = useNavigate();
  const [backlogs, setBacklogs] = useState([]);

  // 만들기 버튼 누르면 이동 함수
  function navigateBacklogCreate(){
    navigate('/BacklogCreate');
  }

  // 
  useEffect(() => {
    async function getBacklog() {
      try {
        const accessToken = localStorage.getItem("access_token");
        const response = await axios.get('http://localhost:8080/api/backlogs',
        {
          headers:{
            Authorization: `Bearer ${accessToken}`
          }
        });
        
        setBacklogs(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getBacklog();
  }, []);

  function handleClick(e) {
    const seq = e.currentTarget.dataset.seq;
    navigate("/BacklogView", { state: { seq } });
  }

    return(
        <div className='backlogselect-background'>
          <div className='backlogselect-header'>
              <div className = "backlogselect-text">
                  B A C K L O G
              </div>
              <button onClick = {navigateBacklogCreate} className="backlog-btncrt"> 백로그 만들기</button>
          </div>

          <div className="backlogselect-list">
            <Container>
              <Row>
                {backlogs && backlogs.map((backlog, index) =>(
                <Col className="mb-4" key = {backlog.seq} data-seq={backlog.seq} onClick={handleClick}>
                  <div className='backlogselect-card'>

                    <div className = 'backlogselect-card-projecttitle'>
                      프로젝트 /<br></br>   
                      {backlog.projectTitle}
                      <hr></hr>
                    </div>

                    <div className='backlogselect-card-title'>
                      <div>{backlog.title}</div>
                    </div>

                    <div className = 'backlogselect-card-content'>
                      <div>{backlog.description}</div>
                    </div>

                    <div className = 'backlogselect-card-deadline'>
                      종료일: 
                      {backlog.deadline}
                    </div>



                    {/* <div className ='backlogselect-card-progressbartxt'>
                      <p>Progressbar</p>
                    </div> */}

                    {/* <div className="progress mb-4">
                      <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        25%
                      </div>
                    </div> */}
                  </div>
                </Col>
                ) )}
              </Row>
            </Container>
          </div>
        </div>
    );

}

export default BacklogSelect;
