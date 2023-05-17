import "./TaskEdit.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import GetMe from "./GetMe";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

function TaskEdit() {
    const location = useLocation();
    const seq = location.state.seq;
  
    useEffect(() => {
    GetMe();
  }, []);

  const [task, setTask] = useState([]);
  const [projectTitle, setProjectTitle] = useState([]);
  const [backlogTitles, setBacklogTitle] = useState([]);
  const [Manager, setManager] = useState([]);
  const [Presenter, setPresenter] = useState([]);
  const [seqCount, setSeqCount] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedManager, setSelectedManager] = useState("");
  const [selectedPresenter, setSelectedPresenter] = useState("");
  const [selectedStoryProgress, setSelectedStoryProgress] = useState("");
  const list = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const navigate = useNavigate();
  const [태스크명, 태스크명변경] = useState("");
  const [상세설명, 상세설명변경] = useState("");
  const [date, changeDate] = useState("");

  useEffect(() => {
    async function getTask() {
      try {
        const accessToken = localStorage.getItem("access_token");
        const res = await axios.get("http://localhost:8080/tasks/view/" + location.state.seq, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log(res.data);
        setTask(res.data);
        // setManager(res.data.manager);
        // selectedPresenter(res.data.presenter);
        // list(res.data.storyProgress);
        태스크명변경(res.data.title);
        상세설명변경(res.data.description);
        changeDate(res.data.deadline);
      } catch (error) {
        console.log(error);
      }
    }
    getTask();
  }, []);


  useEffect(() => {
    async function getAccount() {
      try {
        const accessToken = localStorage.getItem("access_token");
        const res = await axios.get("http://localhost:8080/accounts/view", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setManager(res.data);
        setPresenter(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAccount();
  }, []);



  const backlogTitle = (e) => {
    태스크명변경(e.target.value);
  };

  const backlogDetail = (e) => {
    상세설명변경(e.target.value);
  };

  const handleDateChange = (e) => {
    changeDate(e.target.value);
  };

  const handleStoryProgressChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedStoryProgress(selectedValue);
    console.log(selectedValue);
  };

  const handlePresenterChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedPresenter(selectedValue);
    console.log(selectedValue);
  };

  const handleManagerChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedManager(selectedValue);
    console.log(selectedValue);
  };

  function submitTask(e) {
    e.preventDefault();
    putTaskCreate();
  }

  function putTaskCreate() {
    const accessToken = localStorage.getItem("access_token");
    axios
      .put(
        "http://localhost:8080/tasks/"+location.state.seq,
        {
          title: 태스크명,
          storyProgress: selectedStoryProgress,
          description: 상세설명,
          presenter: selectedPresenter,
          manager: selectedManager,
          deadline: date,
          projectSeq: 1,
          backlogSeq: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        navigate("/TaskSelect");
      })
      .catch((error) => {
        console.log(error);
        console.log("에러입니다");
      });
  }

  useEffect(() => {
    async function getProjectTitle() {
      try {
        const accessToken = localStorage.getItem("access_token");
        const res = await axios.get("http://localhost:8080/api/projects", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setProjectTitle(res.data[0]);
        console.log(res.data);
        setSeqCount(res.data[0].seq);
        setBacklogTitle(res.data[0].backlogs[0].title);
      } catch (error) {
        console.log(error);
      }
    }
    getProjectTitle();
  }, []);

  return (
    <div className="container-all">
      <Link to="/TaskSelect" className="link">
        태스크로 돌아가기
      </Link>
      <div className="container-tasks">
        <div className="container-task-header">
          <h3 className="text-title-1">태스크 설정</h3>
        </div>

        {/* <div className="backlogselect-card-content">
            <p>프로젝트명: {task.backlogEntity.projectTitle}</p>
          </div>
          <div className="backlogselect-card-content">
            <p>백로그명: {task.backlogEntity.title}</p>
          </div>  */}

        <div className="container-task-title">
          <div className="container-task-title-a">
            <h6 className="text-title-2">태스크 명*</h6>
            <input
              className="input-task-title"
              type="text"
              value={태스크명}
              onChange={backlogTitle}
            />
          </div>
        </div>

        <div className="container-task-textarea">
          <div className="mb-3">
            <label htmlFor="example-textarea" className="form-label">
              상세 설명
            </label>
            <textarea
              className="form-task-control"
              type="text"
              value={상세설명}
              onChange={backlogDetail}
            />
          </div>
        </div>

        <div className="container-task-select">
          <Form.Label>보고자 선택</Form.Label>
          <Form.Control
            as="select"
            value={selectedPresenter}
            onChange={handlePresenterChange}
          >
            <option>Select Backlog</option>
            {Presenter.map((presenter, index) => (
              <option key={presenter.userId} value={presenter.userId}>
                {presenter.userId}
              </option>
            ))}
          </Form.Control>
        </div>

        <div className="container-task-select">
          <Form.Label>관리자 선택</Form.Label>
          <Form.Control
            as="select"
            value={selectedManager}
            onChange={handleManagerChange}
          >
            <option>Select Backlog</option>
            {Manager.map((manager, index) => (
              <option key={manager.userId} value={manager.userId}>
                {manager.userId}
              </option>
            ))}
          </Form.Control>
        </div>

        <div className="container-task-select">
          <Form.Label>스토리 진행률</Form.Label>
          <Form.Control
            as="select"
            value={selectedStoryProgress}
            onChange={handleStoryProgressChange}
          >
            <option>Select storyProgress</option>
            {list.map((list, index) => (
              <option key={list} value={list}>
                {list}
              </option>
            ))}
          </Form.Control>
        </div>

        <div className="container-task-enddate">
          <div className="mb-3">
            <label htmlFor="example-date" className="form-label">
              종료 일자
            </label>
            <input
              className="form-task-control"
              id="example-date"
              type="date"
              name="date"
              value={date}
              onChange={handleDateChange}
            />
          </div>
        </div>

        <div className="btn-right">
          <button className="btn-cancel">취소</button>
          <button onClick={submitTask} className="check">
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskEdit;