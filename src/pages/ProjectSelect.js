import './ProjectSelect.css';
import {Link} from 'react-router-dom';


function ProjectSelect(){
    return(

        <div className='header-container'>
            <div className = "header-text">
                프로젝트
            </div>
            <Link to ="/ProjectCreate"><button className="header-btncrt">프로젝트 만들기</button></Link>
        </div>
    );

}

export default ProjectSelect;
