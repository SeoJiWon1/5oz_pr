import './Sidenav.css';
import { FiPlusCircle } from "react-icons/fi";
import { HiFolderPlus, HiQueueList, HiChevronRight, HiArrowLongLeft} from "react-icons/hi2";
import {useState} from "react";

function Sidenav() {
    const[사이드바, 사이드바상태변경] = useState(true);  
    // 사이드바가 true일 때 width는 220px이고 false일 때 width는 70px이다. 
    // true일 때 open 상태 구현예정
    
    const SideNavChange = () => {
        사이드바상태변경(!사이드바);
    };
    
    return(
        <div className={`SideNav ${사이드바 ? "" : "close"}`}>
                <ul>
                    <li className='SideNav-list'>
                        <a className='SideNav-icon' href ='/'><FiPlusCircle></FiPlusCircle>채널</a>
                        <HiArrowLongLeft className='SideNav-arrow' 
                        onClick={SideNavChange}/>
                    </li>
                    <li className='SideNav-list'>
                        <a className='SideNav-icon' href ='/'><HiFolderPlus></HiFolderPlus>만들기</a>
                    </li>
                    <li className='SideNav-list'>
                        <a className='SideNav-icon' href ='/'><HiQueueList></HiQueueList>백로그</a>
                    </li>
                </ul>
        </div>      
    );
}




export default Sidenav;


