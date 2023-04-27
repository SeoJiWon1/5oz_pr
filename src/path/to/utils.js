import axios from 'axios';

const refreshToken = (callback) => {
  axios.post("http://localhost:8080/me/login", {
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then(response => {
    console.log("res.data.accesstoken : " + response.data);
    axios.defaults.headers.common["Authorization"] = `Bearer ${response.data}`;
    if (callback) {
      callback(true);
    }

    setTimeout(() => {
      refreshToken(null);
      // 60초가 지난 후에 refreshToken 함수 작용 그 refreshToken함수는 토큰을 다시 받아옴
      // 자동으로 accesstoken 갱신
    }, (60 * 1000));
  })
  .catch(error => {
    console.log("app silent requset fail : " + error);
    if (callback) {
      callback(false);
    }
  })
  .finally(() => {
    console.log("refresh token request end");
    // setLoading(true);
  });
};


export default refreshToken;