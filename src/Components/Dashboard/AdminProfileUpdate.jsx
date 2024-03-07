import React from 'react'

const AdminProfileUpdate = () => {
  return (
    <div className="PatientProfileUpdate-container">
      <div className="PatientProfileUpdate-holder">
        <div className="PatientProfileUpdate-wrapper">
          <div className="PatientProfileUpdate-container1">
            <div
              className="Patient-imageUpload-container"
              id="upload-image-container1"
            >
              <input type="file" id="insertFile" style={{ display: "none" }} />
              <label htmlFor="insertFile" className="upload-your-file">
                Upload your file
              </label>
            </div>
          </div>
          <div
            className="PatientProfileUpdate-container2"
            id="PatientProfileUpdate-container2"
          >
            {/* <div className="PatientProfileUpdate-input-container">
              <label htmlFor="" className="PatientProfileUpdate-label">
                Name:
              </label>
              <input type="text" className="PatientProfileUpdate-input-input" />
            </div> */}
            <div className="PatientProfileUpdate-input-container">
              <label
                htmlFor=""
                className="PatientProfileUpdate-label"
                onChange={(e) => setPatientAddress(e.target.value)}
              >
                Address:
              </label>
              <input type="text" className="PatientProfileUpdate-input-input" onChange={(e)=>setPatientAddress(e.target.value)} />
            </div>
            <div className="PatientProfileUpdate-input-container">
              <label
                htmlFor=""
                className="PatientProfileUpdate-label"
                placeholder="Optional"
                onChange={(e) => setPhoneNumber(e.target.value)}
              >
                PhoneNumber:
              </label>
              <input type="text" className="PatientProfileUpdate-input-input" onChange={(e)=>setPhoneNumber(e.target.value)} />
            </div>
            {/* <div className="PatientProfileUpdate-input-container">
              <label htmlFor="" className="PatientProfileUpdate-label">
                Email:
              </label>
              <input type="text" className="PatientProfileUpdate-input-input" />
            </div> */}
            <div
              className="PatientProfileUpdate-input-container"
              id="updateFor-gender-age"
            >
              <div className="gender-update-container">
                <label htmlFor="" className="PatientProfileUpdate-label">
                  Gender:
                </label>
                <select
                  name="gender"
                  id=""
                  className="updateSelect"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="gender-update-container">
                <label htmlFor="" className="PatientProfileUpdate-label">
                  Age:
                </label>
                <input
                  type="number"
                  className="PatientProfileUpdate-input-input"
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
            </div>
            <div className="PatientProfileUpdate-input-container">
              <label htmlFor="" className="PatientProfileUpdate-label">
                Allegies:
              </label>
              <input
                type="text"
                className="PatientProfileUpdate-input-input"
                onChange={(e) => setAllegies(e.target.value)}
              />
            </div>
            <div className="PatientProfileUpdate-input-container">
              <label htmlFor="" className="PatientProfileUpdate-label">
                BloodType:
              </label>
              <input
                type="text"
                placeholder="Optiona"
                className="PatientProfileUpdate-input-input"
                onChange={(e) => setBloodType(e.target.value)}
              />
            </div>
          </div>
          <div className="PatientProfileUpdate-container3">
            <div className="PatientProfileUpdate-btn">
              Update
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminProfileUpdate