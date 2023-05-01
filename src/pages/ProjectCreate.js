import './ProjectCreate.css';
import {Link} from 'react-router-dom';

function ProjectCreate(){



    return (
    <div className = "container-all">
        <Link to="/ProjectSelect" className = "link"> 프로젝트 유형으로 돌아가기</Link>
        <div className ='container-pr'>
            <div className='container-pr-left'>
                <h2>프로젝트 설정</h2>
                <h6>*프로젝트 명</h6>
                <input
                    type = "text"
                />
                
            </div>
            <div className="container-pr-right">
                <h5>Scrum Board</h5>
                <div className="btn-right">
                    <button className='btn-cancel'>취소</button>
                    <button className='check'>확인</button>
                </div>
            </div>
        </div>
    </div>  
    );
}
export default ProjectCreate;