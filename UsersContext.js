import { useState, useEffect } from "react";

const UserState = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const addUser = (payload) => {
    setUsers((users) => {
      const newUsers = users.unshift(payload);
      return newUsers;
    });
  };

  const getUsers = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const json = await response.json();
      setUsers(json.users);
      console.log(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return {
    addUser,
    users,
    isLoading,
  };
};

export default UserState;
