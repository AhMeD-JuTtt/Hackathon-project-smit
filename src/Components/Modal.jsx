import React, { useState } from 'react'

const Modal = (props) => {
    // console.log(props)
    const [values, setValues] = useState({
        id:"",
        courseName:"",
        courseCode:"",
        courseDescription:""
    });
    const handleChange = (e) => {
        setValues(prev => {
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
    }

    const handleUpdate = (course) => {
        if (course.id === "") {
            course.id = props.id
        }
        if (course.courseName === "") {
            course.courseName = props.courseName
        }
        if (course.courseCode === "") {
            course.courseCode = props.courseCode
        }
        if (course.courseDescription === "") {
            course.courseDescription = props.courseDescription
        }
        props.onConfimingData(course);
    }
    return (
    
    <>
    <div className="modal fade" id="editModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Course
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
                    placeholder="Course Name"
                    name="courseName"
                    value={values.courseName === "" ? props.courseName : values.courseName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Course Code"
                    name="courseCode"
                    value={values.courseCode === "" ? props.courseCode : values.courseCode}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Course Description"
                    name="courseDescription"
                    value={values.courseDescription === "" ? props.courseDescription : values.courseDescription}
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
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Modal