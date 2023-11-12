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
						<div className="titlec flex flex-col justify-center items-center ml-24">
							<h5 className="text-2xl font-semibold   title">{t.title}</h5>
						</div>
						<div className="descc flex flex-col justify-center items-center">
							<h6 className="text-lg font-medium desc">{t.desc}</h6>
						</div>
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
          <h1 className="bg-black text-white p-4 text-4xl font-bold text-center" contentEditable="true">My Todo List</h1>
		  <form onSubmit={submitHandler} className= "container">
			  <input type="text"
			  className="text-xl border-zinc-800 border-2 m-8 px-3 py-2 rounded field"
			  placeholder="Enter Title here"
			  value={title}
			  onChange={(e) =>{
				  settitle(e.target.value)
			  }}/>
			  <input type="text"
					 className="text-xl border-zinc-800 border-2 m-8 px-3 py-2 rounded field"
					 placeholder="Enter Description here"
			  value={desc}
			  onChange={(e) =>{
				  setdesc(e.target.value)
			  }}/>
			  <button className="bg-black text-white  px-3 py-2 text-2xl rounded font-bold" id= "btn">Add Task</button>
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