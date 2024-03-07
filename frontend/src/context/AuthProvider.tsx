"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { IUser } from "../types/types";

interface AuthProviderProps {
  children?: ReactNode;
}

interface IAuthProvider {
  authUser: IUser | null;
  setAuthUser: Dispatch<SetStateAction<IUser | null>>;
}

const AuthContext = createContext<IAuthProvider | null>(null);

export const useAuth = () => {
  const state = useContext(AuthContext);
  if (!state) throw new Error(`state is undefind`);
  return state;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const storedUser = localStorage.getItem("chat-user");
  const [authUser, setAuthUser] = useState<IUser | null>(
    //@ts-expect-error
    JSON.parse(storedUser) || null
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
