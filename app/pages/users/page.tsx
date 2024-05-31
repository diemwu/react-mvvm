"use client";
import React, { useEffect, useMemo } from "react";
import useUserViewModel from "./view.model";

const UserPage = () => {
  const { users, getUsersByQuery } = useUserViewModel();

  const useData = useMemo(() => {
    if (users.length === 0) {
      return [];
    }
    return users;
  }, [users]);

  useEffect(() => {
    getUsersByQuery();
  }, [getUsersByQuery]);

  return (
    <>
      <h1>Users</h1>
      {/* <p>{new Date().toLocaleTimeString()}</p> */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {useData.map((user, index) => (
            <tr key={index}>
              <th>{user.name}</th>
              <th>{user.email}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserPage;
