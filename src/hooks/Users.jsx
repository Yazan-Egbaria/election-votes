import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://6738a9ca4eb22e24fca8988e.mockapi.io/users",
        );
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.error("Error:", err);
      }
    };

    fetchUsers();
  }, []);

  return { users };
};

export default Users;
