import React from "react";
import "./Bar.css";
function Bar() {
	return (
		<div className="main1">
			<div className="leftContainer">
				<input className="task" type="text" placeholder="Task" />
				<input className="description" type="text" placeholder="Description" />
			</div>
			<div className="buttonBox">
				<div className="button">Add Task</div>
			</div>

			{/* <div className='Table'>Table</div> */}
		</div>
	);
}

export default Bar;
