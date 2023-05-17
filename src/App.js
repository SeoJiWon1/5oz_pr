import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header';
import Login from './pages/Login.js';
import Slidebar from './pages/Slidebar.js';
import {Routes, Route, Link} from 'react-router-dom';
import Sidenav from "./pages/Sidenav";
import ProjectCreate from "./pages/ProjectCreate";
import ProjectSelect from './pages/ProjectSelect';
import ProjectView from './pages/ProjectView';
import ProjectEdit from './pages/ProjectEdit';
import Firstpage from "./pages/Firstpage";
import BacklogSelect from './pages/BacklogSelect';
import BacklogCreate from './pages/BacklogCreate';
import BacklogView from './pages/BacklogView';
import BacklogEdit from './pages/BacklogEdit';
import TaskSelect from './pages/TaskSelect';
import TaskCreate from './pages/TaskCreate';
import TaskView from './pages/TaskView';
import TaskEdit from './pages/TaskEdit';


function App() {

  return (
      <Routes>

        {/* 첫 시작 화면 */}
        <Route path = "/" element ={[
            <Firstpage></Firstpage>,
            // <Slidebar></Slidebar>          
          ]}/>

        {/* 로그인 페이지 */}
        <Route path ="/Login" element={<Login />} />

        {/* 로그인 했을 때 프로젝트 선택 */}
        <Route path = "ProjectSelect" element = {[
            <Header/>,
            <Sidenav/>,
            <ProjectSelect/>]}
        />

        {/* 프로젝트 만들기 */}
        <Route path = "/ProjectCreate" element={<ProjectCreate/>}/>

        {/* 프로젝트 상세 사항 */}
        <Route path = "/ProjectView" element={<ProjectView/>}/>

        {/* 프로젝트 명 수정 */}
        <Route path = "/ProjectEdit" element={<ProjectEdit/>}/>

        {/* 백로그 선택 */}        
        <Route path = "/BacklogSelect" element={[
          <Header/>,
          <Sidenav/>,
          <BacklogSelect/>
          ]}/>
          
        {/* 백로그 만들기  */}
        <Route path = "/BacklogCreate" element={<BacklogCreate/>}/>

        {/* 백로그 창 보기 */}
        <Route path = "/BacklogView" element={<BacklogView/>}/>
      
        {/* 백로그 수정 */}
        <Route path = "/BacklogEdit" element={<BacklogEdit/>}/>
      
        {/* 테스크 선택 */}
        <Route path = "/TaskSelect" element={[<Header/>,
                                            <Sidenav/>,
                                            <TaskSelect/>
                                            ]}/>

        {/* 테스크 창  */}
        <Route path = "/TaskCreate" element={<TaskCreate/>}/>

        {/* 테스크 창 보기 */}
        <Route path = "/TaskView" element={<TaskView/>}/>


      
      </Routes>
    
  );
}

export default App;