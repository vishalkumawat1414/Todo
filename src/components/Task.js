import React from "react";
import "./Task.css";
import {useDispatch} from "react-redux"
import { cmpltTxt, dltTxt } from "../redux/Slice/txtSlice";

function Task({props}) {
	 const dispatch  = useDispatch();
	//  console.log(props);
	return (
		<div className="TopBox">
			<div className="FlexBox">
				<div className="Taskname">{props.task}</div>
				<div className="Descrip">{props.desc}</div>
			
				<button className="comButton" onClick={()=>dispatch(cmpltTxt(props.id))}>{props.complete ? <p className="completed">Completed</p>:<p>Complete</p>}</button>
				<button className="delButton" onClick={()=>dispatch(dltTxt(props.id))} > Delete</button>
			</div>
		</div>
	);
}

export default Task;
