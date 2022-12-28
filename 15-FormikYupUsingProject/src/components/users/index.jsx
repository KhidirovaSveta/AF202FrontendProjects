import React from "react";
import "./index.scss";

const Users = () => {
  let userData = JSON.parse(localStorage.getItem("users"));
  return (
    <div className="container">
      <div className="user-info">
        <table>
          <thead>
           <h2>Users Information </h2>
            <tr>
              <th>Username</th>
              <th>Surname</th>
              <th>Country</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((users, i) => {
              return (
                <tr key={i}>
                  <td>{users.userName}</td>
                  <td>{users.surname}</td>
                  <td>{users.country}</td>
                  <td>{users.city}</td>
                  {/* <td>{users.country.flags}</td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
