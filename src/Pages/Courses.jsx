import React, { useState } from 'react'
import "./TableStyles.css"
import Modal from '../Components/Modal';
import AddCourseModal from '../Components/AddCourseModal';

const DUMMY_COURSES = [
    {
        id:"c1",
        courseName:"Web and Mobile Application Development",
        courseCode:"WMA-06",
        courseDescription: "Learn building web and mobile apps using MERN Stack."
    },
    {
        id:"c2",
        courseName:"Graphic Designing",
        courseCode:"GDS-06",
        courseDescription: "Learn to make beautiful UI and UX designs."
    },
    {
        id:"c3",
        courseName:"3D Animation",
        courseCode:"ANM-06",
        courseDescription: "Learn to make 3D models."
    }
]

let ids = [];

const Courses = () => {
    const [existingCourses, setExistingCourses] = useState(DUMMY_COURSES);
    const [editData, setEditData] = useState({});

    const chekboxChangeHandler =  (e, id) => {
        if (e.target.checked) {
            if (!ids.includes(id)) {
                ids.push(id);
            }
        } else{
            ids = ids.filter((value) => {
                return value !== id;
            })
        }
        // console.log(ids)
        }

    const deleteStudents = () => {
        setExistingCourses((prev => {
            return prev.filter((item) => {
                return !(ids.includes(item.id))
            })
        }))
    }

    const addCourse = (course) => {
        const newCourse = {
            id: Math.random().toString(36).slice(2),
            ...course
        }
        setExistingCourses(prev=>{
            return [
                ...prev,
                newCourse
            ]
        })
    }
    
    const EditCourse = (course) => {
        setEditData(course);
    }

    const updateCourse = (course) => {
        setExistingCourses(prev=>{
            return [
                ...prev,
                course
            ]
        })
        console.log(course.id)
    }


    return (
    <>
        <Modal 
            id={editData.id} 
            courseName={editData.courseName} 
            courseCode={editData.courseCode} 
            courseDescription={editData.courseDescription}
            onConfimingData={updateCourse}
            />
        <AddCourseModal onAdd={addCourse}/>
        <div style={{width:"100%", display:"flex", justifyContent:"flex-end"}}>
            <button 
                type="button" 
                className="btn btn-success btn-sm px-3 m-2" 
                data-bs-toggle="modal"
                data-bs-target="#addModal"
                // onClick={addCourse}
                >
                Add
            </button>
            <button type="button" className="btn btn-danger btn-sm px-3 m-2" onClick={deleteStudents}>
                Delete
            </button>
        </div>
        <section className="intro">
            <div className="bg-image h-100" style={{backgroundColor: "#6095F0"}}>
                <div className="mask d-flex align-items-center h-100">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="card shadow-2-strong" style={{backgroundColor: "#f5f7fa"}}>
                        <div className="card-body">
                            <div className="table-responsive">
                            <table className="table table-borderless mb-0">
                                <thead>
                                <tr>
                                    <th scope="col">
                                    <div className="form-check">
                                        {/* <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={onSelectAll} /> */}
                                    </div>
                                    </th>
                                    <th scope="col">Course Name</th>
                                    <th scope="col">Course Code</th>
                                    <th scope="col">Course Description</th>
                                    <th scope="col">Update</th>
                                </tr>
                                </thead>
                                <tbody>
                                {existingCourses.map(item => <tr key={item.id}>
                                    <th scope="row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" onChange={(e) => chekboxChangeHandler(e, item.id)} />
                                    </div>
                                    </th>
                                    <td>{item.courseName}</td>
                                    <td>{item.courseCode}</td>
                                    <td>{item.courseDescription}</td>
                                    <td>
                                    <button 
                                        type="button" 
                                        className="btn btn-primary btn-sm px-3" 
                                        data-bs-toggle="modal"
                                        data-bs-target="#editModal"
                                        onClick={()=>EditCourse(item)}
                                        >
                                        Update
                                    </button>
                                    </td>
                                </tr>)}
                                </tbody>
                            </table>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>    
)
}

export default Courses