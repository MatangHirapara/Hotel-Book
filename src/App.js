import { useState } from 'react';
import './App.css';
import Login from './component/pages/login/Login';
import Topbar from './component/topbar/Topbar';
import Home from './home/Home';


function App() {
  const getToken = () => {
    const tokenString = localStorage.getItem("data");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  
  const [token, setToken] = useState(getToken())
  console.log('token======>', token)
  
  const saveToken = (userToken) => {
    localStorage.setItem("data", JSON.stringify(userToken));
    setToken(userToken);
  };
  
  
  
  if(!token){
    return <Login setToken={saveToken}/>
  }
  const removeData = (userToken) => {
    window.location.reload(false);
    localStorage.removeItem("data", JSON.stringify(userToken));
  };
  let props = {
    tokens: token,
    removeDatas: removeData,
  };
  return (
    <div >
      <Topbar props={props}/>
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
