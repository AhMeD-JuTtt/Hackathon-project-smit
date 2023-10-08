import React, { useState } from 'react'
import AddStudentModel from '../Components/AddStudentModel';
import StudentModal from '../Components/StudentModal';
import "./TableStyles.css"

const DUMMY_STUDENTS = [
    {
        id:"e1",
        studentName:"Ahmed",
        studentAge: 23,
        enrolledCourse:"WMA-06",
        studentAttendance:"77%",
        contactInfo: "03336593643"
    },
    
    {
        id:"e2",
        studentName:"Hassan",
        studentAge: 21,
        enrolledCourse:"WMA-06",
        studentAttendance:"67%",
        contactInfo: "03170034875"
    },
    {
        id:"e3",
        studentName:"Huzaifa",
        studentAge: 20,
        enrolledCourse:"WMA-06",
        studentAttendance:"66%",
        contactInfo: "03170034875"
    },
    {
        id:"e4",
        studentName:"Ali",
        studentAge: 22,
        enrolledCourse:"WMA-06",
        studentAttendance:"87%",
        contactInfo: "03170034875"
    },
]

let ids = [];

const Students = () => {
    const [existingStudents, setExistingStudents] = useState(DUMMY_STUDENTS);
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
        console.log(ids)
        }

    const deleteStudents = () => {
        setExistingStudents((prev => {
            return prev.filter((item) => {
                return !(ids.includes(item.id))
            })
        }))
    }

    const addStudent = (student) => {
        const newStudent = {
            id: Math.random().toString(36).slice(2),
            ...student
        }
        setExistingStudents(prev=>{
            return [
                ...prev,
                newStudent
            ]
        })
    }
    
    const editStudent = (student) => {
        setEditData(student);
    }

    const updateStudent = (student) => {
        setExistingStudents(prev=>{
            return [
                ...prev,
                student
            ]
        })
        // console.log(course)
    }
    // const addStudents = () => {
    //     // setExistingStudents((prev) => {
    //     //     return 
    //     // })
    //     // setExistingStudents((prev => {
    //     //     return prev.filter((item) => {
    //     //         return !(ids.includes(item.id))
    //     //     })
    //     // }))
    // }

  return (
    <>
        <StudentModal 
            // id={editData.id} 
            studentName={editData.studentName} 
            studentAge={editData.studentAge} 
            enrolledCourse={editData.enrolledCourse}
            studentAttendance={editData.studentAttendance}
            contactInfo={editData.contactInfo}
            onConfimingData={updateStudent}
            />
        <AddStudentModel onAdd={addStudent}/>
        <div style={{width:"100%", display:"flex", justifyContent:"flex-end"}}>
            <button 
                type="button" 
                className="btn btn-success btn-sm px-3 m-2" 
                data-bs-toggle="modal"
                data-bs-target="#addStudentModal"
                // onClick={addStudent}
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
                                    <th scope="col">Name</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Enrolled Course</th>
                                    <th scope="col">Attendance</th>
                                    <th scope="col">Contact Info</th>
                                    <th scope="col">Close</th>
                                </tr>
                                </thead>
                                <tbody>
                                {existingStudents.map(item => <tr key={item.id}>
                                    <th scope="row">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" onChange={(e) => chekboxChangeHandler(e, item.id)} />
                                    </div>
                                    </th>
                                    <td>{item.studentName}</td>
                                    <td>{item.studentAge}</td>
                                    <td>{item.enrolledCourse}</td>
                                    <td>{item.studentAttendance}</td>
                                    <td>{item.contactInfo}</td>
                                    <td>
                                    <button 
                                    type="button" 
                                    className="btn btn-primary btn-sm px-3"
                                    data-bs-toggle="modal"
                                    data-bs-target="#editStudentModal"
                                    onClick={()=>editStudent(item)}
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

export default Students;