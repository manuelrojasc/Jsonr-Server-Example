/* eslint-disable */
import React, { useState, useEffect, useRef } from "react";

const API = process.env.REACT_APP_API;

export const User = () => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  //const [password, setPassword] = useState("");

  const [editing, setEditing] = useState(false);
  const [id, setId] = useState("");

  const nameInput = useRef(null);

  let [users, setUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editing) {
      const res = await fetch(`https://my-api-project.herokuapp.com/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          course,
        }),
      });
      await res.json();
    } else {
      const res = await fetch(`https://my-api-project.herokuapp.com/items/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          course,
          
        }),
      });
      const data = await res.json();
      console.log(data);
      setEditing(false);
      setId("");
    }
    await getUsers();

    setName("");
    setCourse("");
    //setPassword("");
    nameInput.current.focus();
  };

  const getUsers = async () => {
    const res = await fetch(`https://my-api-project.herokuapp.com/items`).then(res => res.json())
    console.log(res)
    setUsers(res);
  };

  const deleteUser = async (id) => {
    const userResponse = window.confirm("Are you sure you want to delete it?");
    if (userResponse) {
      const res = await fetch(`https://my-api-project.herokuapp.com/items/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      console.log(data);
      await getUsers();
    }
  };

  const editUser = async (id) => {
    const res = await fetch(`https://my-api-project.herokuapp.com/items/${id}`);
    const data = await res.json();

    setEditing(true);
    setId(id);

    // Reset
    setName(data.name);
    setCourse(data.course);
  //  setPassword(data.password);
    nameInput.current.focus();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="row">
      <div className="col-md-4">
        <form onSubmit={handleSubmit} className="card card-body">
          <div className="form-group">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="form-control"
              placeholder="Name"
              ref={nameInput}
              autoFocus
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              onChange={(e) => setCourse(e.target.value)}
              value={course}
              className="form-control"
              placeholder="User's Email"
            />
          </div>
          <button className="btn btn-primary btn-block">
            {editing ? "Update" : "Create"}
          </button>
        </form>
      </div>
      <div className="col-md-6">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
             {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.course}</td>
                <td>{user.id}</td>
                <td>
                  <button
                    className="btn btn-secondary btn-sm btn-block"
                    onClick={(e) => editUser(user.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm btn-block"
                    onClick={(e) => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
             ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};