import "./TaskView.css";
import axios from "axios";
import { Await, useNavigate, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import GetMe from "./GetMe";

function TaskView() {
  const navigate = useNavigate();
  const location = useLocation();
  const seq = location.state.seq;
  const [task, setTask] = useState([]);
  useEffect(() => {
    GetMe();
  }, []);

  useEffect(() => {
    async function fetchData(seq) {
      try {
        const accessToken = localStorage.getItem("access_token");
        const response = await axios.get(
          "http://localhost:8080/tasks/view/" + location.state.seq,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setTask(response.data);
        console.log(response.data.backlogEntity);
        console.log(response.data.manager.userId);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData(seq);

  }, []);

  function deleteData(seq) {
    try {
      const accessToken = localStorage.getItem("access_token");
      axios.delete(
        "http://localhost:8080/tasks/"+location.state.seq,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      ).then(() => {
        navigate("/TaskSelect");
      });
    } catch (error) {
      console.log(error);
    }
  }

  function handleClick(seq) {
    navigate("/TaskEdit", { state: { seq } });
  }

  return (
    <div className="container-all">
      <Link to="/TaskSelect" className="link">
        태스크 리스트로 돌아가기
      </Link>
      <div className="container-pr">
        <div className="container-pr-left">
          <h3 className="task-table-title">태스크</h3>
          <table className="task-table">
            <tr className="task-table-tr">
              <th className="task-table-th">프로젝트명</th>
              <td className="task-table-td">~</td>
            </tr>
            <tr className="task-table-tr">
              <th className="task-table-th">태스크 제목</th>
              <td className="task-table-td">{task.title}</td>
            </tr>
            <tr className="task-table-tr">
              <th className="task-table-th">목적</th>
              <td className="task-table-td">{task.description}</td>
            </tr>
            <tr className="task-table-tr">
              <th className="task-table-th">종료 일자</th>
              <td className="task-table-td">{task.deadline}</td>
            </tr>
            <tr className="task-table-tr">
              <th className="task-table-th">storyProgress</th>
              <td className="task-table-td">{task.storyProgress}%</td>
            </tr>
          </table>
          <div className="taskselect-card-content">
            {/* <p>프로젝트명: {task.backlogEntity.projectTitle}</p> */}
          </div>
          <div className="taskselect-card-content">
            {/* <p>백로그명: {task.backlogEntity.title}</p> */}
          </div> 

          <div className="backlogselect-card-content">
            {/* <p>보고자: {task.presenter.userId}</p> */}
          </div>
          <div className="backlogselect-card-content">
            {/* <p>관리자: {task.manager.userId}</p> */}
          </div>
        </div>
        <div className="container-pr-right">
          <div className="btn-right">
            <button className="btn-cancel" onClick={() => handleClick(seq)}>
              수정
            </button>
            <button className="check" onClick={() => deleteData(seq)}>
              삭제
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskView;