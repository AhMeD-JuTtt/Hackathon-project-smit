import React, { useState } from 'react'

const AddStudentModel = (props) => {

    // console.log(props)
    const [values, setValues] = useState({
        studentName:"",
        studentAge: "",
        enrolledCourse:"",
        studentAttendance:"",
        contactInfo: ""
    });
    const handleChange = (e) => {
        setValues(prev => {
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
    }

    const handleUpdate = (student) => {
        if (student.studentName === "") {
            student.studentName = props.studentName
        }
        if (student.studentAge === "") {
            student.studentAge = props.studentAge
        }
        if (student.enrolledCourse === "") {
            student.enrolledCourse = props.enrolledCourse
        }
        if (student.studentAttendance === "") {
            student.studentAttendance = props.studentAttendance
        }
        if (student.contactInfo === "") {
            student.contactInfo = props.contactInfo
        }
        props.onAdd(student);
    }

  return (
    <>
    <div className="modal fade" id="addStudentModal">
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title">Add Student
                {/* {productForEdit.title} */}
                </h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
                </div>
                <div className="modal-body">
                <div className="row mb-3">
                    <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Student Name"
                        name="studentName"
                        value={values.studentName === "" ? props.studentName : values.studentName}
                        onChange={handleChange}
                    />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Student Age"
                        name="studentAge"
                        value={values.studentAge === "" ? props.studentAge : values.studentAge}
                        onChange={handleChange}
                    />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Course"
                        name="enrolledCourse"
                        value={values.enrolledCourse === "" ? props.enrolledCourse : values.enrolledCourse}
                        onChange={handleChange}
                    />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Attendance"
                        name="studentAttendance"
                        value={values.studentAttendance === "" ? props.studentAttendance : values.studentAttendance}
                        onChange={handleChange}
                    />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                    <input
                        type="phone"
                        className="form-control"
                        placeholder="Contact"
                        name="contactInfo"
                        value={values.contactInfo === "" ? props.contactInfo : values.contactInfo}
                        onChange={handleChange}
                    />
                    </div>
                </div>
                </div>
                <div className="modal-footer">
                <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                >
                    Close
                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={() => {
                    handleUpdate(values);
                    }}
                >
                    Add
                </button>
                </div>
            </div>
            </div>
        </div>
</>
  )
}

export default AddStudentModel