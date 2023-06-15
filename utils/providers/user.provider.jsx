import React, { createContext, useContext, useEffect, useState } from "react";
import client, { AuthClient } from "../client";

const UserContext = createContext({});

function UserProvider({ children, guest }) {
  const [user, setUser] = useState(null);
  const [userChecked, setUserChecked] = useState(false);

  const updateUser = () => {
    if (guest) return;

    AuthClient()
      .get("/v1/auth/profile")
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

  return guest ? (
    children
  ) : (
    <UserContext.Provider value={{ updateUser, user }}>
      {userChecked && children}
    </UserContext.Provider>
  );
}

const useUser = () => {
  return useContext(UserContext);
};

export { UserProvider, useUser };
