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
import Board from "./pages/Board";
import Firstpage from "./pages/Firstpage";
import BacklogSelect from './pages/BacklogSelect';
import BacklogCreate from './pages/BacklogCreate';
import BacklogView from './pages/BacklogView';
import BacklogEdit from './pages/BacklogEdit';
import TaskSelect from './pages/TaskSelect';
import TaskCreate from './pages/TaskCreate';
import TaskView from './pages/TaskView';
// import TaskEdit from './pages/TaskEdit';


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

        {/* 로그인 했을 때 프로젝트 선택창 */}
        <Route path = "ProjectSelect" element = {
          <div>
            <Header/>
            <Sidenav/>
            <ProjectSelect/>
          </div>}
        />

        {/* 프로젝트 새로 만들기 */}
        <Route path = "/ProjectCreate" element={<ProjectCreate/>}/>

        {/* 프로젝트 선택해서 들어갔을 때 */}
        <Route path ="/Main" element={[
          <Header></Header>, 
          <Sidenav></Sidenav>,
          <Board></Board>
        ]} />
      {/* 프로젝트 내용 확인 */}
      
        
      <Route path = "/BacklogSelect" element={[
        <Header/>,
        <Sidenav/>,
        <BacklogSelect/>
        ]}/>
      
      <Route path = "/BacklogCreate" element={<BacklogCreate/>}/>

      <Route path = "/ProjectView" element={<ProjectView/>}/>

      <Route path = "/ProjectEdit" element={<ProjectEdit/>}/>
      
      <Route path = "/TaskSelect" element={<TaskSelect/>}/>

      <Route path = "/TaskView" element={<TaskView/>}/>

      <Route path = "/BacklogView" element={<BacklogView/>}/>
      
      <Route path = "/BacklogEdit" element={<BacklogEdit/>}/>

      <Route path = "/TaskCreate" element={<TaskCreate/>}/>
      
      </Routes>
    
  );
}

export default App;