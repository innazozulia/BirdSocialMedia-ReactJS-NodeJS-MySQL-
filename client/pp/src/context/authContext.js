import React from "react";

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //to do
    setCurrentUser({
      id: 1,
      name: "Emma Murphy",
      profilePicture:
        "https://images.unsplash.com/photo-1665686304355-0b09b1e3b03c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    });
  };

  console.log(currentUser);

  React.useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
