import './Sidenav.css';
import { HiQueueList, HiArrowLongLeft} from "react-icons/hi2";
import { AiFillProject } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import {useState} from "react";

function Sidenav() {
    const[사이드바, 사이드바상태변경] = useState(true);   
    // true일 때 open 상태 구현
    
    const SideNavChange = () => {
        사이드바상태변경(!사이드바);
    };
    
    return(
        <div className={`sidenav ${사이드바 ? "" : "close"}`}>
                <ul>
                    <li className='sidenav-list'>
                        <a className='sidenav-icon' href ='/ProjectSelect'><AiFillProject></AiFillProject>Project</a>
                        <HiArrowLongLeft className='sidenav-arrow' 
                        onClick={SideNavChange}/>
                    </li>
                    <li className='sidenav-list'>
                        <a className='sidenav-icon' href ='/BacklogSelect'><HiQueueList></HiQueueList>Backlog</a>
                    </li>
                    <li className='sidenav-list'>
                        <a className='sidenav-icon' href ='/TaskSelect'><BiTask></BiTask>Task</a>
                    </li>
                </ul>
        </div>      
    );
}




export default Sidenav;


