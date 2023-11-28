import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Bar.css";
import { nanoid } from "@reduxjs/toolkit";
import { addTxt } from "../redux/Slice/txtSlice";

function Bar() {
	const [task, setTask] = useState("");
	const [desc, setDesc] = useState("");

	const dispatch = useDispatch();

	function handelClick(e) {
		e.preventDefault();

		dispatch(addTxt({ id: nanoid(4), task, desc }));

		// console.log("after clr", task, desc);
	}
	//  console.log(task,desc);
	return (
		<div className="main1">
			<div className="leftContainer">
				<input
					className="task"
					type="text"
					placeholder="Task"
					onChange={(e) => setTask(e.target.value)}
				/>
				<input
					className="description"
					type="text"
					placeholder="Description"
					onChange={(e) => setDesc(e.target.value)}
				/>
			</div>
			<div className="buttonBox">
				<button className="button" onClick={handelClick}>
					Add Task
				</button>
			</div>
		</div>
	);
}

export default Bar;
