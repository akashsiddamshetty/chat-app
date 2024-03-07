/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { ReactNode, useContext, useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";
import { useAuth } from "./AuthProvider";

interface SocketProviderProps {
  children?: ReactNode;
}

interface ISocketContext {
  onlineUsers: string[];
  socket: Socket | undefined;
}

const SocketContext = React.createContext<ISocketContext | null>(null);

export const useSocket = () => {
  const state = useContext(SocketContext);
  if (!state) throw new Error(`state is undefind`);
  return state;
};

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const [socket, setSocket] = useState<Socket>();
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuth();

  useEffect(() => {
    if (authUser) {
      const _socket = io("https://chat-app-y9mn.onrender.com", {
        query: {
          userId: authUser._id,
        },
      });

      _socket.on("getOnlineUsers", (users: any) => {
        setOnlineUsers(users);
      });
      setSocket(_socket);
      return () => {
        _socket.disconnect();
        setSocket(undefined);
      };
    } else {
      if (socket) {
        socket.close();
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ onlineUsers, socket }}>
      {children}
    </SocketContext.Provider>
  );
};
