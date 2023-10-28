import { createContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();
const url = "focus-wku-api.vercel.app/focuswku/v1/auth";
// axios.interceptors.request.use((req) => {});

function AuthProvider({ children }) {
  const [auth, setAuth] = useState([]);

  //createPosts
  const signup = async (authData) => {
    try {
      console.log(authData);
      const response = await axios.post(url, authData);
    //   console.log(postData);
      setAuth({ ...auth, ...response.data });
    } catch (err) {
      console.log(err);
    }
  };

  const login = async (authData) => {
    try {
      const response = await axios.post(url, authData);
      setAuth({...auth, ...response.data})
    } catch(err) {
      console.log(err)
    }
  }

  const authOperation = { signup, login };

  return (
    <AuthContext.Provider value={authOperation}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
export default AuthContext;
