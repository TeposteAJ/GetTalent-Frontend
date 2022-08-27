import { createContext, useState } from "react";

// Creamos el contexto pasando el contexto actual, algo vacio o inicializado
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  // Retornamos el provider con los estados al que se podran acceder
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;