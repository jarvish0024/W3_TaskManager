import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { CreateTask, DeleteTaskById, GetAllTasks, UpdateTaskById } from "./api";

function TaskManager() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [copyTasks, setCopyTasks] = useState([]);
  const [updateTask, setUpdateTask] = useState(null);

  const handleTask = () => {
      if (updateTask && input) {
          //upadte api call
          console.log('update api call');
          const obj = {
              taskName: input,
              isDone: updateTask.isDone,
              _id: updateTask._id
          }
          handleUpdateItem(obj);
      } else if (updateTask === null && input) {
          console.log('create api call')
          //create api call
          handleAddTask();
      }
      setInput('')
  }

  useEffect(() => {
      if (updateTask) {
          setInput(updateTask.taskName);
      }
  }, [updateTask])

  const handleAddTask = async () => {
      const obj = {
          taskName: input,
          isDone: false
      }
      try {
          const { success, message } =
              await CreateTask(obj);
         
          fetchAllTasks()
      } catch (err) {
          console.error(err);
      }
  }

  const fetchAllTasks = async () => {
      try {
          const { data } =
              await GetAllTasks();
          setTasks(data);
          setCopyTasks(data);
      } catch (err) {
          console.error(err);
      }
  }
  useEffect(() => {
      fetchAllTasks()
  }, [])


  const handleDeleteTask = async (id) => {
      try {
          const { success, message } = await DeleteTaskById(id);
          
          fetchAllTasks()
      } catch (err) {
          console.error(err);
          notify('Failed to create task', 'error')
      }
  }

  const handleCheckAndUncheck = async (item) => {
      const { _id, isDone, taskName } = item;
      const obj = {
          taskName, 
          isDone: !isDone 
      }
      try {
          const { success, message } = await UpdateTaskById(_id, obj);
          
          fetchAllTasks()
      } catch (err) {
          console.error(err);
          notify('Failed to create task', 'error')
      }
  }

  const handleUpdateItem = async (item) => {
      const { _id, isDone, taskName } = item;
      const obj = {
          taskName,
          isDone: isDone
      }
      try {
          const { success, message } = await UpdateTaskById(_id, obj);
          
          fetchAllTasks()
      } catch (err) {
          console.error(err);
      }
  }

  const handleSearch = (e) => {
      const term = e.target.value.toLowerCase();
      const oldTasks = [...copyTasks];
      const results = oldTasks.filter((item) => item.taskName.toLowerCase().includes(term));
      setTasks(results);
  }
  return (

      <div className='flex flex-col items-center
      w-[50vw] m-auto mt-5 bg-blue-400 '>
          <h1 className='mb-4 text-2xl font-semibold'>Task Manager App</h1>
          {/* Input and Search box */}
          <div className='flex items-center gap-2'>
              <div className='flex items-center  '>
                  <input type='text'
                      value={input}
                      onChange={
                          (e) => setInput(e.target.value)}
                      className='p-1 outline-none'
                      placeholder='Add a new Task'
                  />
                  <button
                      onClick={handleTask}
                      className='bg-red-600'
                  >
                      <FaPlus className='m-2 ' />
                  </button>
              </div>

              <div className='flex items-center'>
                  <span
                      className='bg-green-600 p-2 '
                  >
                      <FaSearch />
                  </span>
                  <input
                      onChange={handleSearch}
                      className='form-control p-1 outline-none'
                      type='text'
                      placeholder='Search tasks'
                  />
              </div>
          </div>

          {/* List of items */}
          <div className='flex flex-col w-full'>
              {
                  tasks.map((item) => (
                      <div key={item._id} className='m-2 p-2 border bg-light
              w-100 rounded-3 flex  justify-between
              items-center'>
                          <span
                              className={item.isDone ? 'line-through' : ''}
                          >{item.taskName}
                          </span>

                          <div className=''>
                              <button
                                  onClick={() => handleCheckAndUncheck(item)}
                                  className='btn btn-success
                          btn-sm me-2'
                                  type='button'>
                                  <FaCheck />
                              </button>
                              <button
                                  onClick={() => setUpdateTask(item)}
                                  className='btn btn-primary
                          btn-sm me-2'
                                  type='button'>
                                  <FaPen />
                              </button>
                              <button
                                  onClick={() => handleDeleteTask(item._id)}
                                  className='btn btn-danger
                          btn-sm me-2'
                                  type='button'>
                                  <FaTrash />
                              </button>
                          </div>
                      </div>
                  ))
              }
          </div>

          
      </div>

  )
}

export default TaskManager
