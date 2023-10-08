import React from 'react'
import { NavLink } from 'react-router-dom';
// import styles from "./SideBar.module.css"

const SideBar = () => {

    return (
        <>
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: "300px", height:"100vh"}}>
            <NavLink to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" end>
            {/* <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
            <span className="fs-4 text-center">Student Management System</span>
            </NavLink>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item my-2">
                <NavLink to="/" className={({isActive}) => 
                isActive ? "nav-link active" : "nav-link text-white"
                } 
                end>
                {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg> */}
                Dashboard
                </NavLink>
            </li>
            <li className="my-2">
                <NavLink to="/students" className={({isActive}) => isActive ? "nav-link active" : "nav-link text-white"}>
                {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg> */}
                Students
                </NavLink>
            </li>
            <li className="my-2">
                <NavLink to="/courses" className={({isActive}) => isActive ? "nav-link active" : "nav-link text-white"}>
                {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#grid"></use></svg> */}
                Courses
                </NavLink>
            </li>
            <li className="my-2">
                <NavLink to="/attendance" className={({isActive}) => isActive ? "nav-link active" : "nav-link text-white"}>
                {/* <svg className="bi me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg> */}
                Attendance
                </NavLink>
            </li>
            </ul>
        </div>
        </>
    );
  };

export default SideBar