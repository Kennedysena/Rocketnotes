/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [data, setData] = useState("");

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Nao foi possível entrar");
      }
    }
  }
  return (
    <AuthContext.Provider value={{ signIn, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}