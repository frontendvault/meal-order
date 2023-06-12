import React, { createContext, useContext, useEffect, useState } from "react";
import client from "../client";

const UserContext = createContext({});

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userChecked, setUserChecked] = useState(false);

  const updateUser = () => {
    client
      .get("/v1/user/me")
      .then(({ data }) => {
        setUser(data);
        setUserChecked(true);
      })
      .catch(() => {
        setUserChecked(true);
      });
  };

  useEffect(() => {
    updateUser();
  }, []);

  return (
    <UserContext.Provider value={{ updateUser, user }}>
      {userChecked && children}
    </UserContext.Provider>
  );
}

const useUser = () => {
  return useContext(UserContext);
};

export default { UserProvider, useUser };
