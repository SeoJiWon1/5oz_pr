import "./ProjectSelect.css";
import axios from "axios";
import { Await, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import GetMe from "./GetMe";

function TaskSelect() {
  const navigate = useNavigate();
  const originData = "client_id:client_secret";
  const [Tasks, setTasks] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    GetMe();
  }, []);
  // 만들기 눌렀을 때 이동함수
  function navigateTaskCreate() {
    navigate("/TaskCreate");
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const accessToken = localStorage.getItem("access_token");
        const response = await axios.get("http://localhost:8080/tasks", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setTasks(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []); // 의존성 배열은 빈 배열로 지정

  function handleClick(e) {
    const seq = e.currentTarget.dataset.seq;
    navigate("/TaskView", { state: { seq } });
  }

  return (
    <div>
      <div className="header-container">
        <div className="header-text">테스크</div>
        <button className="header-btncrt" onClick={navigateTaskCreate}>
          테스크 만들기
        </button>
      </div>
      <div>
      <div className="mt-2">
        <h5 className="m-0 pb-2">
          <a
            className="text-dark"
            data-bs-toggle="collapse"
            href="#todayTasks"
            role="button"
            aria-expanded="false"
            aria-controls="todayTasks"
          >
            <i className="uil uil-angle-down font-18"></i>백로그명
          </a>
        </h5>

        <div className="collapse show" id="todayTasks">
          <div className="card mb-0">
            <div className="card-body">
            {Tasks && Tasks.map((Tasks, index) =>(
              <div className="row justify-content-sm-between" key={Tasks.seq} data-seq={Tasks.seq} onClick={handleClick}>
                <div className="col-sm-6 mb-2 mb-sm-0">
                  <div className="form-check">
                    <h5>{Tasks.seq}</h5>
                  </div>
                </div>
                <div className="col-sm-6 mb-2 mb-sm-0">
                  <div className="form-check">
                    <h5>{Tasks.title}</h5>
                  </div>
                </div>
                
                <div className="col-sm-6">
                  <div className="d-flex justify-content-between">
                    <div>
                      <ul className="list-inline font-13 text-end">
                        <li className="list-inline-item ms-1">
                          {Tasks.deadline}
                        </li>
                        <li className="list-inline-item ms-2">
                          {Tasks.storyProgress}%
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              
              </div>
              ) )}

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default TaskSelect;