import React from "react";
import { useState } from "react";
import './Task.css';
import { TasksTodo } from './Redux/Reducers/tasks.reducer';
import { useDispatch, useSelector} from 'react-redux';
import { TiTick } from "@react-icons/all-files/ti/TiTick";

function Task() {

  const dispacher = useDispatch([])

  const { Tasks } = useSelector((state) => state.tasksReducer)

  const [setTask, newTitle] = useState('')
  function handleTask(e) {
    newTitle(e.target.value)
  }


  function handleSubmit() {
    if (!setTask) return
    dispacher(TasksTodo(setTask))
    newTitle('')
  }

  return (
    <div className="container-fluid" id="body">
      <div className="row">
        <div className="container-fluid">
          <div className="row" id="inputbox">
            <div className="col-md-12" id='headingbtn'>
              <h1>Add Tasks</h1>
              <button
                type="submit"
                value={setTask}
                onClick={handleSubmit}
              >Save
              </button>
            </div>
            {/* <form> */}
            <div className="col-md-12">
              <h2>Title</h2>
            </div>
            <div className="col-md-12">
              <input
                type="text"
                placeholder="Add a Task..."
                onChange={handleTask}
                value={setTask}
              />
            </div>
            {/* </form> */}
            <div className="col-md-12">

            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row" id="recentnotes">
            <div className="col-md-12">
              <h2><TiTick /> My Tasks</h2>
            </div>
            {(Tasks.length) ? (
              <div className="col-md-12" id="TaskBox">
                {Tasks.map((item,index) => (
                  <div className="savedTask" key={index}>
                    <div className="checkbox">
                      <input
                        type="checkbox"
                      />
                    </div>
                    <div className="teaklist">
                      <h5>{item}</h5>
                      <p>now</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div id="defaultTask">
                <h1>+</h1>
                <p>Your Task is empty</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;