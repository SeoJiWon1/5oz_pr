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
  async function getBacklog() { 
      try {
        const response = await axios.get('http://localhost:8080/backlogs');
        //console.log(response.data);
        setBacklogs(response.data);
    } catch (error) {
        console.log(error);
      }
    }
      getBacklog();

    return(
        <div>
          <div className='backlogselect-header'>
              <div className = "backlogselect-text">
                  백로그
              </div>
              <button onClick = {navigateBacklogCreate} className="backlog-btncrt"> 백로그 만들기</button>
          </div>

          <div className="backlogselect-list">
            <Container>
              <Row>
                {backlogs && backlogs.map((backlog) =>(
                <Col className="mb-4" key = {backlog.seq}>
                  <div className='backlogselect-card'>

                    <div className='backlogselect-card-title'>
                      {backlog.title}
                    </div>

                    <div className = 'backlogselect-card-content'>
                      {backlog.description}
                    </div>

                    <div className = 'backlogselect-card-deadline'>
                      deadline
                      {backlog.deadline}
                    </div>

                    <div className ='backlogselect-card-progressbartxt'>
                      <p>Progressbar</p>
                    </div>

                    <div className="progress mb-4">
                      <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        25%
                      </div>
                    </div>
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
