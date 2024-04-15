"use client"
import React, { useState } from 'react';

const page = () => {

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [mainTask, setMainTask] = useState([]);

  let rederTask = <h2 className='font-bold'>No Task Available</h2>

  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { title, desc }])
    setTitle("")
    setDesc("")
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)
  }

  if (mainTask.length > 0) {
    rederTask = mainTask.map((item, index) => {
      return (
        <li key={index} className='list-none flex items-center justify-between mb-8'>
          <div className='flex justify-between mb-5 w-2/3'>
            <h2 className='text-2xl font-semibold'>{item.title}</h2>
            <h4 className='text-lg font-medium '>{item.desc}</h4>
          </div>
          <button onClick={(i) => { deleteHandler(i) }} className='bg-red-600 text-white px-4 py-2 rounded-xl font-bold'>Delete</button>
        </li>
      )
    })
  }



  return (
    <>
      <h1 className="bg-sky-700 text-red-100 p-5 text-5xl font-bold text-center rounded-xl ml-9 mr-9 mt-3">Akshay Todo List</h1>
      <form onSubmit={submitHandler} className='flex items-center ml-9 mr-9'>
        <input type="text" className="text-2xl border-zinc-800 border-2 m-8 px-4 py-2 rounded-lg" placeholder="Enter Task here" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" className="text-2xl border-zinc-800 border-2 m-8 px-4 py-2 rounded-lg" placeholder="Enter Description here" value={desc} onChange={(e) => setDesc(e.target.value)} />

        <button className="bg-green-600 p-3 font-bold rounded-lg text-white">Add Task</button>
      </form>
      <hr className='m-3' />
      <div className='ml-9 mr-9 p-8 bg-slate-200 rounded-lg text-center'>
        {rederTask}
      </div>


    </>
  );
};

export default page;