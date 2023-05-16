import axios from'axios';


    function GetMe(){
        
        const originData = 'client_id:client_secret';
        const accessToken = localStorage.getItem("access_token");

        console.log(accessToken);
        axios.get('http://localhost:8080/me',
        {
            headers:{
                Authorization: `Bearer ${accessToken}`
            },
        })
        .then(res => {
            console.log(res.status);
            if(res.status === 200){
                console.log('access_token이 유효합니다.');
            
        }
        
        })
        .catch((error)=> {
            console.log(error);
            if(error.response.status ===401 ){
                console.log('401 에러입니다');
                getRefresh();
            }
        })

        function getRefresh(){
            const refreshToken = localStorage.getItem("refresh_token");
            console.log(refreshToken);
            axios.post('http://localhost:8080/oauth/token?grant_type=refresh_token&refresh_token='+refreshToken,
            {},
            {
                headers:{
                'Authorization': 'Basic '+window.btoa(originData)}
            }
            ).then(res => {
                console.log(res);
                if(res.status === 200){
                    localStorage.setItem("access_token", res.data.access_token);
                    localStorage.setItem("refresh_token", res.data.refresh_token);
                    console.log("현재 accesstoken은: " + res.data.access_token);
                    console.log("현재 refreshtoken은: " + res.data.refresh_token);
                    return Promise.resolve(res);
                }else{
                console.log('오류');
                
                }
                
            })
            .catch((error)=> {
                console.log("로그인 페이지로 이동합니다");
                
            })
            }
        }

     export default GetMe;
