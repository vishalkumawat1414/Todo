import React, { useState } from "react";
import "./Table.css";
import Task from "./Task";
import { useSelector } from "react-redux";

function Table() {
	 const data = useSelector((state) => state.txtSlice);
		console.log(data);

	return (
		<div className="Top1">
			{data?.map((item)=><Task key= {item.id} props = {item} />)}
			
		</div>
	);
}

export default Table;
