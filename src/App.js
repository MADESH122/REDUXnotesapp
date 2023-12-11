import './App.css';
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { CgNotes } from "@react-icons/all-files/cg/CgNotes";
import { TiTick } from "@react-icons/all-files/ti/TiTick";
import { HiOutlineInboxIn } from "@react-icons/all-files/hi/HiOutlineInboxIn";
import { MdDelete } from "@react-icons/all-files/md/MdDelete";
import { FaRegUserCircle } from "@react-icons/all-files/fa/FaRegUserCircle";
import { NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import Notes from './Notes';
import Task from './Task';
import Achived from './Achived';
import Bin from './Bin';
function App() {

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-2'>
          <div className='username'>
            <i><FaRegUserCircle /></i>
            <div>
              <h5>Jonh Doe</h5>
              <p>Johndoe@gmail.com</p>
            </div>
          </div>
          <NavLink to={"/"} type='button' > <i><FaHome /></i>  Home </NavLink>
          <NavLink to={"/Search"} > <i><FaSearch /></i>  Search</NavLink>
          <NavLink to={"/Notes"} > <i><CgNotes /></i>  notes</NavLink>
          <NavLink to={"/Task"} > <i><TiTick /></i>   Task</NavLink>
          <NavLink to={"/Achived"} > <i><HiOutlineInboxIn /> </i> Achived</NavLink>
          <NavLink to={"/Bin"}> <i><MdDelete /> </i> Bin</NavLink>
        </div>
        {/*---------------Main-bar----------------- */}
        <div className='col-md-10'>
          <div className='row'>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/Search' element={<Search />}></Route>
              <Route path='/Notes' element={<Notes />}></Route>
              <Route path='/Task' element={<Task />}></Route>
              <Route path='/Achived' element={<Achived />}></Route>
              <Route path='/Bin' element={<Bin />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>


  );
}

export default App;

