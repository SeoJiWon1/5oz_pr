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

        {/* 프로젝트 새로 만들기 */}
        <Route path = "/ProjectCreate" element={<ProjectCreate/>}/>

        {/* 프로젝트 선택해서 들어갔을 때 */}
        <Route path ="/Main" element={[
          <Header></Header>, 
          <Sidenav></Sidenav>,
          <Board></Board>
        ]} />
        
      </Routes>
    
  );
}

export default App;
