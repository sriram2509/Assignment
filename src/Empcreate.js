import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpCreate = () => {
  const [id_input_fm_1_first_name, firstnamechange] = useState("");
  const [id_input_fm_1_last_name, lastnamechange] = useState("");
  const [id_input_fm_1_title, titlechange] = useState("");
  const [id_input_fm_1_gender, genderchange] = useState("");
  const [id_input_fm_1_nic, nicchange] = useState("");
  const [id_input_fm_1_date_of_birth, dateofbirthchange] = useState("");
  const [id_input_fm_1_contact_number, contactnumberchange] = useState("");
  const [id_input_fm_1_email, emailchange] = useState("");
  const [id_input_fm_1_department, departmentchange] = useState("");
  const [id_input_fm_1_designation, designationchange] = useState("");
  const [id_input_fm_1_nationality, nationalitychange] = useState("");
  const [id_input_fm_1_address, addresschange] = useState("");
  const [id_input_fm_1_country, countrychange] = useState("");
  const [id_input_fm_1_city, citychange] = useState("");
  const [id_input_fm_1_profile_picture, profilepicturechange] = useState("");
  const [id_input_fm_1_description, descriptionchange] = useState("");
  const [id_input_fm_1_remarks, remarkschange] = useState("");
  const [active, activechange] = useState(true);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();

    const value_firstName = document.getElementById(
      "id_input_fm_1_first_name"
    ).value;
    const value_lastName = document.getElementById(
      "id_input_fm_1_last_name"
    ).value;
    const value_title = document.getElementById("id_input_fm_1_title").value;
    const value_gender = document.getElementById("id_input_fm_1_gender").value;
    const value_nic = document.getElementById("id_input_fm_1_nic").value;
    const value_dob = document.getElementById(
      "id_input_fm_1_date_of_birth"
    ).value;
    const value_contactNumber = document.getElementById(
      "id_input_fm_1_contact_number"
    ).value;
    const value_email = document.getElementById("id_input_fm_1_email").value;
    const value_department = document.getElementById(
      "id_input_fm_1_department"
    ).value;
    const value_designation = document.getElementById(
      "id_input_fm_1_designation"
    ).value;
    const value_nationality = document.getElementById(
      "id_input_fm_1_nationality"
    ).value;
    const value_address = document.getElementById(
      "id_input_fm_1_address"
    ).value;
    const value_country = document.getElementById(
      "id_input_fm_1_country"
    ).value;
    const value_city = document.getElementById("id_input_fm_1_city").value;
    const value_profilePicture = document.getElementById(
      "id_input_fm_1_profile_picture"
    ).value;
    const value_description = document.getElementById(
      "id_input_fm_1_description"
    ).value;
    const value_remarks = document.getElementById(
      "id_input_fm_1_remarks"
    ).value;
    const value_active = document.getElementById(
      "id_input_fm_1_active"
    ).checked;

    if (value_firstName === "") {
      document.getElementById("errorMsg_firstName").innerHTML =
        "Enter the firstname";
    } else {
      document.getElementById("errorMsg_firstName").innerHTML = "";
    }
    if (value_lastName === "") {
      document.getElementById("errorMsg_lastName").innerHTML =
        "Enter the lastname";
    } else {
      document.getElementById("errorMsg_lastName").innerHTML = "";
    }
    if (value_title === "") {
      document.getElementById("errorMsg_title").innerHTML = "Select the title";
    } else {
      document.getElementById("errorMsg_title").innerHTML = "";
    }
    if (value_gender === "") {
      document.getElementById("errorMsg_gender").innerHTML =
        "Select the gender";
    } else {
      document.getElementById("errorMsg_gender").innerHTML = "";
    }
    if (value_nic === "") {
      document.getElementById("errorMsg_nic").innerHTML = "Enter the NIC";
    } else {
      document.getElementById("errorMsg_nic").innerHTML = "";
    }
    if (value_dob === "") {
      document.getElementById("errorMsg_dob").innerHTML =
        "Enter the Date of Birth";
    } else {
      document.getElementById("errorMsg_dob").innerHTML = "";
    }
    if (value_contactNumber === "") {
      document.getElementById("errorMsg_contactNumber").innerHTML =
        "Enter the contact number";
    } else {
      document.getElementById("errorMsg_contactNumber").innerHTML = "";
    }
    if (value_email === "") {
      document.getElementById("errorMsg_email").innerHTML = "Enter the email";
    } else {
      document.getElementById("errorMsg_email").innerHTML = "";
    }
    if (value_department === "") {
      document.getElementById("errorMsg_department").innerHTML =
        "Select the department";
    } else {
      document.getElementById("errorMsg_department").innerHTML = "";
    }
    if (value_designation === "") {
      document.getElementById("errorMsg_designation").innerHTML =
        "Select the designation";
    } else {
      document.getElementById("errorMsg_designation").innerHTML = "";
    }
    if (value_nationality === "") {
      document.getElementById("errorMsg_nationality").innerHTML =
        "Select the nationality";
    } else {
      document.getElementById("errorMsg_nationality").innerHTML = "";
    }
    if (value_address === "") {
      document.getElementById("errorMsg_address").innerHTML =
        "Enter the address";
    } else {
      document.getElementById("errorMsg_address").innerHTML = "";
    }
    if (value_country === "") {
      document.getElementById("errorMsg_country").innerHTML =
        "Select the country";
    } else {
      document.getElementById("errorMsg_country").innerHTML = "";
    }
    if (value_city === "") {
      document.getElementById("errorMsg_city").innerHTML = "Select the city";
    } else {
      document.getElementById("errorMsg_city").innerHTML = "";
    }
    if (value_profilePicture === "") {
      document.getElementById("errorMsg_profilePicture").innerHTML =
        "Select the profile picture";
    } else {
      document.getElementById("errorMsg_profilePicture").innerHTML = "";
    }
    if (value_description === "") {
      document.getElementById("errorMsg_description").innerHTML =
        "Enter the description";
    } else {
      document.getElementById("errorMsg_description").innerHTML = "";
    }
    if (value_remarks === "") {
      document.getElementById("errorMsg_remark").innerHTML = "Enter the remark";
    } else {
      document.getElementById("errorMsg_remark").innerHTML = "";
    }
    if (value_active === false) {
      document.getElementById("errorMsg_active").innerHTML =
        "This field is required";
    } else {
      document.getElementById("errorMsg_active").innerHTML = "";
    }

    // check all fields not empty
    if (
      value_firstName !== "" &&
      value_lastName !== "" &&
      value_title !== "" &&
      value_gender !== "" &&
      value_nic !== "" &&
      value_dob !== "" &&
      value_contactNumber !== "" &&
      value_email !== "" &&
      value_department !== "" &&
      value_designation !== "" &&
      value_nationality !== "" &&
      value_address !== "" &&
      value_country !== "" &&
      value_city !== "" &&
      value_profilePicture !== "" &&
      value_description !== "" &&
      value_remarks !== "" &&
      value_active !== false
    ) 
{
      const empdata = {
        id_input_fm_1_first_name,
        id_input_fm_1_last_name,
        id_input_fm_1_title,
        id_input_fm_1_gender,
        id_input_fm_1_nic,
        id_input_fm_1_date_of_birth,
        id_input_fm_1_contact_number,
        id_input_fm_1_email,
        id_input_fm_1_department,
        id_input_fm_1_designation,
        id_input_fm_1_nationality,
        id_input_fm_1_address,
        id_input_fm_1_country,
        id_input_fm_1_city,
        id_input_fm_1_profile_picture,
        id_input_fm_1_description,
        id_input_fm_1_remarks,
        active,
      };

      fetch("", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(empdata),
      })
        .then((res) => {
          alert("Saved successfully.");
          navigate("/");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <div>
      <div className="row mt-4">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h3 className="mt-4 mx-2">Create Employee</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        id="id_input_fm_1_first_name"
                        placeholder="Enter FirstName"
                        type="text"
                        value={id_input_fm_1_first_name}
                        onChange={(e) => firstnamechange(e.target.value)}
                        className="form-control"
                      />
                      <span
                        className="text-danger"
                        id="errorMsg_firstName"
                      ></span>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        id="id_input_fm_1_last_name"
                        placeholder="Enter LastName"
                        type="text"
                        value={id_input_fm_1_last_name}
                        onChange={(e) => lastnamechange(e.target.value)}
                        className="form-control"
                      />
                      <span
                        className="text-danger"
                        id="errorMsg_lastName"
                      ></span>
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="form-group">
                      <label>Title</label>
                      <select
                        id="id_input_fm_1_title"
                        onChange={(e) => titlechange(e.target.value)}
                        className="form-control"
                      >
                        <option selected="true" disabled="disabled" value="">
                          -select-
                        </option>
                        <option value={"1"}> Mr</option>
                        <option value={"2"}> Miss</option>
                      </select>
                      <span className="text-danger" id="errorMsg_title"></span>
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="form-group">
                      <label>Gender</label>
                      <select
                        id="id_input_fm_1_gender"
                        onChange={(e) => genderchange(e.target.value)}
                        className="form-control"
                      >
                        <option selected="true" disabled="disabled" value="">
                          -select-
                        </option>
                        <option value={"1"}> Male</option>
                        <option value={"2"}> Female</option>
                      </select>
                      <span className="text-danger" id="errorMsg_gender"></span>
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="form-group">
                      <label>NIC</label>
                      <input
                        id="id_input_fm_1_nic"
                        placeholder="Enter NIC number"
                        value={id_input_fm_1_nic}
                        onChange={(e) => nicchange(e.target.value)}
                        className="form-control"
                      />
                      <span className="text-danger" id="errorMsg_nic"></span>
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="form-group">
                      <label>Date of Birth</label>
                      <input
                        id="id_input_fm_1_date_of_birth"
                        value={id_input_fm_1_date_of_birth}
                        type="date"
                        onChange={(e) => dateofbirthchange(e.target.value)}
                        className="form-control"
                      />
                      <span className="text-danger" id="errorMsg_dob"></span>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>ContactNumber</label>
                      <input
                        id="id_input_fm_1_contact_number"
                        placeholder="Enter contact number"
                        value={id_input_fm_1_contact_number}
                        type="tel"
                        onChange={(e) => contactnumberchange(e.target.value)}
                        className="form-control"
                      />
                      <span
                        className="text-danger"
                        id="errorMsg_contactNumber"
                      ></span>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        id="id_input_fm_1_email"
                        placeholder="Enter Email"
                        type="email"
                        onChange={(e) => emailchange(e.target.value)}
                        className="form-control"
                      />
                      <span className="text-danger" id="errorMsg_email"></span>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Department</label>
                      <select
                        id="id_input_fm_1_department"
                        onChange={(e) => departmentchange(e.target.value)}
                        className="form-control"
                      >
                        <option selected="true" disabled="disabled" value="">
                          -select-
                        </option>
                        <option value={"1"}> Human resources</option>
                        <option value={"2"}> Marketing and sales</option>
                        <option value={"4"}> Research and development</option>
                      </select>
                      <span
                        className="text-danger"
                        id="errorMsg_department"
                      ></span>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Designation</label>
                      <select
                        id="id_input_fm_1_designation"
                        onChange={(e) => designationchange(e.target.value)}
                        className="form-control"
                      >
                        <option selected="true" disabled="disabled" value="">
                          -select-
                        </option>
                        <option value={"1"}> Engineer</option>
                        <option value={"2"}> Director of marketing </option>
                        <option value={"3"}> Marketing manager</option>
                        <option value={"4"}> Manager</option>
                      </select>
                      <span
                        className="text-danger"
                        id="errorMsg_designation"
                      ></span>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Nationality</label>
                      <select
                        id="id_input_fm_1_nationality"
                        onChange={(e) => nationalitychange(e.target.value)}
                        className="form-control"
                      >
                        <option selected="true" disabled="disabled" value="">
                          -select-
                        </option>
                        <option value={"1"}> Sri Lankan</option>
                        <option value={"2"}> Indian </option>
                        <option value={"3"}> Australian</option>
                      </select>
                      <span
                        className="text-danger"
                        id="errorMsg_nationality"
                      ></span>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Address</label>
                      <input
                        id="id_input_fm_1_address"
                        placeholder="Enter Address"
                        type="text"
                        onChange={(e) => addresschange(e.target.value)}
                        className="form-control"
                      />
                      <span
                        className="text-danger"
                        id="errorMsg_address"
                      ></span>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>Country</label>
                      <select
                        id="id_input_fm_1_country"
                        onChange={(e) => countrychange(e.target.value)}
                        className="form-control"
                      >
                        <option selected="true" disabled="disabled" value="">
                          -select-
                        </option>
                        <option value={"3"}>Sri Lanka</option>
                        <option value={"4"}>India</option>
                        <option value={"6"}>United Kingdom</option>
                        <option value={"8"}>Australia</option>
                      </select>
                      <span
                        className="text-danger"
                        id="errorMsg_country"
                      ></span>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>City</label>
                      <select
                        id="id_input_fm_1_city"
                        onChange={(e) => citychange(e.target.value)}
                        className="form-control "
                      >
                        <option selected="true" disabled="disabled" value="">
                          -select-
                        </option>
                        <option value={"1"}>Galgamuwa</option>
                        <option value={"2"}>Narammala</option>
                      </select>
                      <span className="text-danger" id="errorMsg_city"></span>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>ProfilePicture</label>
                      <input
                        id="id_input_fm_1_profile_picture"
                        type="file"
                        value={id_input_fm_1_profile_picture}
                        onChange={(e) => profilepicturechange(e.target.value)}
                        className="form-control"
                      />
                      <span
                        className="text-danger"
                        id="errorMsg_profilePicture"
                      ></span>
                    </div>
                  </div>

                  <div className="col-lg-8">
                    <div className="form-group">
                      <label>Description</label>
                      <input
                        id="id_input_fm_1_description"
                        type="textarea"
                        placeholder="Enter Description"
                        value={id_input_fm_1_description}
                        onChange={(e) => descriptionchange(e.target.value)}
                        className="form-control"
                      />
                      <span
                        className="text-danger"
                        id="errorMsg_description"
                      ></span>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Remarks</label>
                      <input
                        id="id_input_fm_1_remarks"
                        type="textarea"
                        placeholder="Enter Remarks"
                        value={id_input_fm_1_remarks}
                        onChange={(e) => remarkschange(e.target.value)}
                        className="form-control"
                      />
                      <span className="text-danger" id="errorMsg_remark"></span>
                    </div>
                  </div>

                  <div className="col-lg-2">
                    <div className="form-check">
                      <input
                        checked={active}
                        onChange={(e) => activechange(e.target.checked)}
                        type="checkbox"
                        className="form-check-input"
                        id="id_input_fm_1_active"
                      />
                      <label
                        className="form-check-label"
                        for="id_input_fm_1_active"
                      >
                        Active
                      </label>
                      <span className="text-danger" id="errorMsg_active"></span>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        submit
                      </button>
                      <button className="btn btn-danger" type="reset">
                        Reset
                      </button>
                      <Link to="/" className="btn btn-dark">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmpCreate;