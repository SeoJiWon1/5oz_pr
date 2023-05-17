import "./TaskCreate.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import GetMe from "./GetMe";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

function TaskCreate() {
  useEffect(() => {
    GetMe();
  }, []);

  const [projectTitle, setProjectTitle] = useState([]);
  const [Manager, setManager] = useState([]);
  const [Presenter, setPresenter] = useState([]);
  const [Backlog, setBacklog] = useState([]);
  const [seqCount, setSeqCount] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedBacklog, setSelectedBacklog] = useState("");
  const [selectedManager, setSelectedManager] = useState("");
  const [selectedPresenter, setSelectedPresenter] = useState("");
  const [selectedStoryProgress, setSelectedStoryProgress] = useState("");
  const list = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  useEffect(() => {
    async function getProjectTitle() {
      try {
        const accessToken = localStorage.getItem("access_token");
        const res = await axios.get("http://localhost:8080/api/projects", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setProjectTitle(res.data);
        setSeqCount(res.data[0].seq);
      } catch (error) {
        console.log(error);
      }
    }
    getProjectTitle();
  }, []);

  useEffect(() => {
    async function getBacklogTitle() {
      try {
        const accessToken = localStorage.getItem("access_token");
        const res = await axios.get("http://localhost:8080/api/backlogs", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setBacklog(res.data);
        console.log(res.data);
        console.log(res.data[0].seq);
      } catch (error) {
        console.log(error);
      }
    }
    getBacklogTitle();
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

  const navigate = useNavigate();
  const [테스크명, 테스크명변경] = useState("");
  const [상세설명, 상세설명변경] = useState("");
  const [date, changeDate] = useState("");

  const backlogTitle = (e) => {
    테스크명변경(e.target.value);
  };

  const backlogDetail = (e) => {
    상세설명변경(e.target.value);
  };

  const handleDateChange = (e) => {
    changeDate(e.target.value);
  };

  const handleProjectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedValue(selectedValue);
    console.log(selectedValue);
  };
  const handleBacklogChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedBacklog(selectedValue);
    console.log(selectedValue);
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
    postTaskCreate();
  }

  function postTaskCreate() {
    const accessToken = localStorage.getItem("access_token");
    axios
      .post(
        "http://localhost:8080/tasks",
        {
          title: 테스크명,
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
        // postTaskMail();
        navigate("/TaskSelect");
      })
      .catch((error) => {
        console.log(error);
        console.log("에러입니다");
      });
  }

  function postTaskMail() {
    const accessToken = localStorage.getItem("access_token");
    axios
      .post(
        "http://localhost:8081/api/mails",
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

  return (
    <div className="container-all">
      <Link to="/TaskSelect" className="link">
        테스크로 돌아가기
      </Link>
      <div className="container-taskss">
        <div className="container-task-header">
          <h3 className="text-title-1">테스크 설정</h3>
        </div>

        <div className="container-bck-select">
          <Form.Label>Project Select</Form.Label>
          <Form.Control
            as="select"
            value={selectedValue}
            onChange={handleProjectChange}
          >
            <option>프로젝트 선택</option>
            {projectTitle.map((project, index) => (
              <option key={project.seq} value={project.seq}>
                {projectTitle[index].title}
              </option>
            ))}
          </Form.Control>
        </div>

        <div className="container-bck-select">
          <Form.Label>Backlog Select</Form.Label>
          <Form.Control
            as="select"
            value={selectedBacklog}
            onChange={handleBacklogChange}
          >
            <option>백로그 선택</option>
            {Backlog.map((Backlog, index) => (
              <option key={Backlog.seq} value={Backlog.seq}>
                {Backlog.title}
              </option>
            ))}
          </Form.Control>
        </div>

        <div className="container-task-title">
          <div className="container-task-title-a">
            <h6 className="text-title-2">테스크 명*</h6>
            <input
              className="input-task-title"
              type="text"
              value={테스크명}
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
              className="form-bck-control"
              type="text"
              value={상세설명}
              onChange={backlogDetail}
            />
          </div>
        </div>

        <div className="container-task-select">
          <Form.Label>담당자 선택</Form.Label>
          <Form.Control
            as="select"
            value={selectedPresenter}
            onChange={handlePresenterChange}
          >
            <option>Select Presenter</option>
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
              className="form-bck-control"
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

export default TaskCreate;