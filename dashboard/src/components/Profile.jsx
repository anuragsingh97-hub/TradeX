import { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css"

const Profile = () => {
  const [user, setUser] = useState({});
  const [editMode, setEditMode] = useState(false);

  const fetchProfile = async () => {
    const res = await axios.get("http://localhost:3002/user/profile", {
      withCredentials: true,
    });

    setUser(res.data);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    await axios.put("http://localhost:3002/user/profile", user, {
      withCredentials: true,
    });

    setEditMode(false);
    fetchProfile();
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <div className="avatar">{user.username?.charAt(0).toUpperCase()}</div>

          <h2>{user.username}</h2>

          <p>{user.email}</p>
        </div>
        <div className="profile">
          <div className="profile-container">
            <h2>My Profile</h2>

            <div className="">
              <div className="mb-3">
                <label>Name</label>

                <input
                  className="form-control"
                  name="username"
                  disabled={!editMode}
                  value={user.username || ""}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label>Email</label>

                <input
                  className="form-control"
                  name="email"
                  disabled={!editMode}
                  value={user.email || ""}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label>Mobile</label>

                <input
                  className="form-control"
                  name="mobile"
                  disabled={!editMode}
                  value={user.mobile || ""}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label>Date of Birth</label>

                <input
                  type="date"
                  className="form-control"
                  name="dob"
                  disabled={!editMode}
                  value={user.dob?.substring(0, 10) || ""}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label>Gender</label>

                <select
                  className="form-select"
                  name="gender"
                  disabled={!editMode}
                  value={user.gender || ""}
                  onChange={handleChange}
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              {!editMode ? (
                <button
                  className="btn btn-primary"
                  onClick={() => setEditMode(true)}
                >
                  Edit Profile
                </button>
              ) : (
                <div className="d-flex gap-3">
                  <button className="btn btn-success" onClick={handleSave}>
                    Save
                  </button>

                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      setEditMode(false);
                      fetchProfile();
                    }}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
