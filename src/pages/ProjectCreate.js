import './ProjectCreate.css';
import {Link} from 'react-router-dom';
import { FcBrokenLink } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";



function ProjectCreate(){



    return (
    <div className = "container-all">
        <Link to="/ProjectSelect" className = "link"> 프로젝트 유형으로 돌아가기</Link>
        <div className ='container-pr'>
            <div className='container-pr-left'>
                <h3>프로젝트 설정</h3>
                <h6>프로젝트 명*</h6>
                <input className="inputname"
                    type = "text"
                />
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
                            <span className="icon-text3">팀에서 관리</span>
                            <p className="icon-text4">팀과 함께 스프린트를 만들고 실행합니다</p>
                        </div>
                    </div>    
                    <div className="btn-right">
                        <button className='btn-cancel'>취소</button>
                        <button className='check'>확인</button>
                    </div>    
                </div>
            </div>    
        </div>
    </div>  
    );
}
export default ProjectCreate;