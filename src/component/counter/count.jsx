import { incNum,decNum } from "../../redux/adults/action";
import { inccount,deccount } from "../../redux/child/childaction";
import { incroom,decroom } from "../../redux/room/roomaction";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import "./count.css"
import { Button } from "@mui/material";

const Count = () => {
  const navigate = useNavigate();
  const mystate = useSelector((state) => state.change);
  const mychild = useSelector((state) => state.child);
  const myrooms = useSelector((state) => state.room);
  const dispatch = useDispatch();

  const close =  () => {
    navigate("/");
  }
  document.getElementById("mainDiv").style.zIndex = 999; 
  
  return (
    <>
      <div id="mainDiv" style={{width: "100%", height: "45vh"}} >
        <div className="fation" ></div>
        <div className="counter" >
          <Button onClick={close} style={{marginLeft: "10.9rem", color: "red", border: "2px solid red"}} >
            <CloseIcon  />
          </Button>
          <div className="counterName" >
            <div>
              <p>Adults</p>
            </div>
            <div className="count">
              <button onClick={() => dispatch(incNum())}>+</button>
              <button onClick={() => dispatch(decNum())}>-</button>
              <h3>{mystate}</h3>
            </div>
          </div>
          <div className="counterName" >
            <div>
              <p>Children</p>
            </div>
            <div className="count">
              <button onClick={() => dispatch(inccount())}>+</button>
              <h3>{mychild}</h3>
              <button onClick={() => dispatch(deccount())}>-</button>
            </div>
          </div>
          <div className="counterName" >
            <div>
              <p>Rooms</p>
            </div>
            <div className="count">
              <button onClick={() => dispatch(incroom())}>+</button>
              <h3>{myrooms}</h3>
              <button onClick={() => dispatch(decroom())}>-</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Count