import './BacklogCreate.css';
import {Link} from 'react-router-dom';

function BacklogCreate(){

   return(
    <div className = "container-all">
        <Link to="/Backlog" className = "link"> 백로그로 돌아가기</Link>
        <div className = 'container-backlog'>
            <div className = 'container-bck-header'>
                <h3 className = 'text-title-1'>백로그 설정</h3>
            </div>

            <div className = 'container-bck-title'>
                <div className = 'container-bck-title-a'>
                    <h6 className = 'text-title-2'>백로그 명*</h6>
                    <input className="input-bck-title"
                            type = "text"
                            //value = 
                            //onChange =  
                        />
                </div>    
            </div>

            <div className = 'container-bck-textarea'>
                <div className ="mb-3">
                <label for="example-textarea" className="form-label">상세 설명</label>
                <textarea className = "form-bck-control"></textarea>
                </div>
            </div>
            
            <div className = 'container-bck-enddate'>
                <div class="mb-3">
                    <label for="example-date" className="form-label">Date</label>
                    <input className="form-bck-control" id="example-date" type="date" name="date"/>
                </div>
            </div>

            <div className="btn-right">
                <button className='btn-cancel'>취소</button>
                <button className='check'>확인</button>
            </div>    
        </div>
    </div>
   )
}





export default BacklogCreate;