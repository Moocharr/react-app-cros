import React from 'react';
import axios from 'axios';
function App(props) {

  const [id,setId] = React.useState(null);
  const [pswd,setPswd] = React.useState(null);
  const [message,setMessage] = React.useState(null);

  const login = ()=>{
    axios.request({
      url:'/adm/login',
      method:'post',
      params:{
        id:id,
        pswd:pswd
      }
    }).then(res =>{
      console.log(res);
      if(res.data){
        setMessage("登录成功");
      }
      else{
        setMessage("账号或密码错误");
      };
    });
  };

  return (
      
    <div>
      <h3>用户登录</h3>
      <div>
          <span>用户名：</span>
          <span><input type="text" onInput={(e) => {setId(e.target.value);}}/></span>
      </div>
      <div>
          <span>密码：</span>
          <span><input type="password" onInput={(e) => {setPswd(e.target.value);}}/></span>
      </div>
      <div>
          <button onClick={login}>登录</button>
      </div>
      <span>{message}</span>
    </div>
    );
}
export default App;