"use client"
import React, {useState} from 'react';

const Page = () => {
	const [title, settitle] = useState("")
	const [desc, setdesc] = useState("")
	const [task , setTask] = useState([])
	const submitHandler = (e) => {
		e.preventDefault()
		if (!title == ""){
			setTask([...task, {title, desc}])
			document.title = "Task:- " + title;
		}
		setTimeout(()=>{
			document.title = "My Todo";
			setdesc("")
			settitle("")
		},1000)
	}
	const deleteHandler = (i) => {
		let copytask = [...task]
		copytask.splice(i,1)
		setTask(copytask)
	}
	let renderTask = <h2>No Task Available</h2>

	if (task.length>0){
		renderTask = task.map((t,i)=>{
			return (
				<li className="flex items-center justify-between mb-8" key={i}>
					<div className="flex justify-between mb-5 w-2/3 items-center">
						<h5 className="text-2xl font-semibold ml-5 uppercase">{t.title}</h5>
						<h6 className="text-lg font-medium">{t.desc}</h6>
					</div>
					<button
						className="bg-red-400 text-white px-4 py-2 rounded font-bold"
						onClick={() =>{
							deleteHandler(i)
						}}
					>Delete</button>
				</li>
			)
		});
	}
	
  return (
      <>
          <h1 className="bg-black text-white p-4 text-4xl font-bold text-center">My Todo List</h1>
		  <form onSubmit={submitHandler}>
			  <input type="text"
			  className="text-xl border-zinc-800 border-2 m-8 px-3 py-2 rounded"
			  placeholder="Enter Title here"
			  value={title}
			  onChange={(e) =>{
				  settitle(e.target.value)
			  }}/>
			  <input type="text"
					 className="text-xl border-zinc-800 border-2 m-8 px-3 py-2 rounded"
					 placeholder="Enter Description here"
			  value={desc}
			  onChange={(e) =>{
				  setdesc(e.target.value)
			  }}/>
			  <button className="bg-black text-white  px-3 py-2 text-2xl rounded font-bold">Add Task</button>
		  </form>
		  <hr/>
		  <div className="p-8 bg-slate-200">
			  <ul>
				  {renderTask}
			  </ul>
		  </div>
      </>
	);
};

export default Page;