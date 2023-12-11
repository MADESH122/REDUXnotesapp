import React from 'react'
import { useState } from 'react';
import './Notes.css'
import { MdDelete } from "@react-icons/all-files/md/MdDelete";
import { NotesTodo, addTodo, deleteTodo } from './Redux/Reducers/tasks.reducer';
import { useDispatch, useSelector } from 'react-redux';
import { FaTextHeight } from "@react-icons/all-files/fa/FaTextHeight";
import { IoMdColorFill } from "@react-icons/all-files/io/IoMdColorFill";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { FaAlignLeft } from "@react-icons/all-files/fa/FaAlignLeft";
import { IoMdArrowBack } from "@react-icons/all-files/io/IoMdArrowBack";
import { GrLinkNext } from "@react-icons/all-files/gr/GrLinkNext";

function Notes() {

    const dispacher = useDispatch([])
    var { tasks, Notes } = useSelector((state) => state.tasksReducer)

    const [setTitle, setnewTitle] = useState('')
    function handleTitle(e) {
        setnewTitle(e.target.value)
    }

    const [setNotes, setnewNotes] = useState('')
    function handleNotes(e) {
        setnewNotes(e.target.value)
    }

    function handleSubmit() {
        if (!setTitle) return
        if (!setNotes) return
        addItem(setTitle)
        dispacher(addTodo(setTitle))
        dispacher(NotesTodo(setNotes))
        setnewTitle('')
        setnewNotes('')
     }

    // function handleDelete() {
    //     dispacher(deleteTodo())
    // }

    const addItem = (tasks) => {
        const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
        const addNewItem = { id, tasks }
        const listItems = [...tasks, addNewItem]
        setnewTitle(listItems)
    }

    const handleDelete = ( ) => {
       
        dispacher(deleteTodo( ))
    }


    return (
        <div className="container-fluid" id="body">
            <div className="row">
                <div className="container-fluid">
                    <div className="row" id="inputbox">
                        <div className="col-md-12" id='headingbtn'>
                            <h1>Add Notes</h1>
                            <button
                                type="submit"
                                onClick={handleSubmit}
                            >Save
                            </button>
                        </div>
                        {/* <form> */}
                        <div className="col-md-12">
                            <input
                                onChange={handleTitle}
                                type="text"
                                placeholder="Title"
                                value={setTitle}
                                required />
                        </div>
                        <div className="col-md-12">
                            <input
                                onChange={handleNotes}
                                value={setNotes}
                                type="text"
                                placeholder="Take a notes..."
                                required
                            />
                        </div>
                        {/* </form> */}
                        <div className="col-md-12">
                            <h4>timer</h4>
                        </div>
                        <div className="col-md-12">
                            <h4 className="edits">
                                <li><FaTextHeight /></li>
                                <li><IoMdColorFill /></li>
                                <li><GiHamburgerMenu /></li>
                                <li><FaAlignLeft /></li>
                                <li><IoMdArrowBack /></li>
                                <li><GrLinkNext /></li>
                            </h4>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row" id="recentnotes">
                        <div className="col-md-12">
                            <h1>My Notes</h1>
                        </div>
                        <div className="col-md-12" >
                            <h5>Recent viewed</h5>
                        </div>

                        {(tasks.length) ? (
                            <div className="col-md-12" id="cards">
                                {tasks.map((task, index) => (
                                    <div className="savedNotes" key={index}>
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
                        ) : (<div id="default">
                            <h1>+</h1>
                            <p>Your list is empty</p>
                        </div>)}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Notes