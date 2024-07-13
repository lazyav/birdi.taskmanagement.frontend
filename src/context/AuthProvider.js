import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  const addToken = async (token) => {
    setToken(token);
    localStorage.setItem("token", token);
    navigate("dashboard");
    return;
  };

  return (
    <AuthContext.Provider value={{ token, addToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
