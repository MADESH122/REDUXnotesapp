import React from "react";
import { useSelector ,useDispatch} from 'react-redux';
import { MdDelete } from "@react-icons/all-files/md/MdDelete";
import { TiTick } from "@react-icons/all-files/ti/TiTick";
import "./Home.css"
import { deleteTodo } from './Redux/Reducers/tasks.reducer';

function Home() {
    
    const dispacher = useDispatch([])
    const { tasks, Notes } = useSelector((state) => state.tasksReducer)
    const { Tasks } = useSelector((state) => state.tasksReducer)

    function handleDelete(){
        dispacher(deleteTodo( ))
    }
    return (
        <div className="Homepage">
            <h1 id="user">Welcome John</h1>
            <div className="container-fluid">
                <div className="row" id="recentnotes">
                    <div className="col-md-12">
                        <h1>My Notes</h1>
                    </div>
                    <div className="col-md-12" >
                        <h5>Recent viewed</h5>
                    </div>
                    {(tasks.length) ? (
                        <div className="col-md-12" id="Hcards">
                            {tasks.map((task, index) => (
                                <div className="HsavedNotes" key={Tasks}>
                                    <h4>{task}
                                        <MdDelete
                                            role='buttpn'
                                        onClick={() => handleDelete(index)}
                                        />
                                    </h4>
                                    <p>{Notes[index]}</p>
                                </div>
                            ))}
                        </div>
                    ) : (<div id="Hdefault">
                        <h1>+</h1>
                        <p>Your list is empty</p>
                    </div>)}
                </div>
            </div>
            <div className="container-fluid">
                <div className="row" id="recentnotes">
                    <div className="col-md-12">
                        <h2><TiTick /> My Tasks</h2>
                    </div>
                    {(Tasks.length) ? (
                        <div className="col-md-12" id="HTaskBox" key={tasks}>
                            {Tasks.map((item) => (
                                <div className="HsavedTask">
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

    )
}

export default Home;