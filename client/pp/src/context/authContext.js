import React from "react";
import axios from "axios";

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(
    JSON.parse(localStorage.getItem("user") || null),
  );

  const login = async (inputs) => {
    const res = await axios.post(
      "http://localhost:8000/api/auth/login",
      inputs,
      {
        withCredentials: true,
      },
    );

    setCurrentUser(res.data);
  };
  // console.log(currentUser);

  React.useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
