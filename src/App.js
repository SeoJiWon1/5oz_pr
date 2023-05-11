import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header';
import Login from './pages/Login.js';
import Slidebar from './pages/Slidebar.js';
import {Routes, Route, Link} from 'react-router-dom';
import Sidenav from "./pages/Sidenav";
import ProjectCreate from "./pages/ProjectCreate";
import Board from "./pages/Board";
import Firstpage from "./pages/Firstpage";
import ProjectSelect from './pages/ProjectSelect';
import BacklogCreate from'./pages/BacklogCreate';
import BacklogSelect from'./pages/BacklogSelect';

function App() {

  return (
      <Routes>
        {/* 첫 시작 화면 */}
        <Route path = "/" element ={
          <div>
        <Firstpage></Firstpage>
        <Slidebar></Slidebar>          
          </div>
        }/>

        {/* 로그인 페이지 */}
        <Route path ="/Login" element={<Login />} />

        {/* 로그인 했을 때 프로젝트 선택창 */}
        <Route path = "ProjectSelect" element = {
          <div>
            <Header/>
            
            <ProjectSelect/>
          </div>}
        />

        {/* 프로젝트 새로 만들기 상세 정보 넣기 */}
        <Route path = "/ProjectCreate" element={<ProjectCreate/>}/>

        {/* 프로젝트 선택해서 들어갔을 때 보드창 */}
        <Route path ="/Board" element={[
          <Header></Header>, 
          <Sidenav></Sidenav>,
          <Board></Board>
        ]} />

        {/*백로그 창*/}
        <Route path ="/BacklogSelect" element={[
          <Header></Header>, 
          <Sidenav></Sidenav>,
          <BacklogSelect></BacklogSelect>
          
        ]} />
        
        {/* 백로그 만들기 */}
        <Route path = "/BacklogCreate" element={<BacklogCreate/>}/>
      </Routes>
    
  );
}

export default App;
