import { Link } from 'react-router-dom';
import './Board.css';
import {Button , InputGroup, Input, ProgressBar} from 'react-bootstrap';


function Board(){
    return(
    <div className='board'>
        <div className='title'>
            <div className='l_title'>
                <Link to='/ProjectSelect'>프로젝트 선택</Link>
                <h2>프로젝트명</h2>
                <p>설명?</p>
                <div className="input-group mb-3">
                    <input type="text" className="form-control"  aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                </div>

            </div>
            <div className='m_title'></div>
            <div className='r_title'>
                <button type="button" className="btn btn-primary">스프린트 추가</button>
            </div>
        </div>
        <div className='context'>
            <div className='l_work work'>
        <p className='context_title'><span>할일</span>&nbsp;<span>이슈</span></p>
                {/* <div>
                    <span>안녕하세요</span>
                    <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"/>
                    <div class="progress-bar bg-success" style={{width: "20%"}}></div>

                </div> */}
            </div>
            <div className='m_work work'>
                <p className='context_title'>진행중</p>
            </div>
            <div className='r_work work'>
                <p className='context_title'>완료</p>
            </div>
        </div>
    </div>
    
    );
}

export default Board;