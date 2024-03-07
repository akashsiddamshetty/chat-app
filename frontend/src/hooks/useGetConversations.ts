/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { IConversations } from "../types/types";
import { axiosPrivate } from "../axios/axios";
import toast from "react-hot-toast";

const useGetConversations = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [conversations, setConversations] = useState<IConversations[]>([]);

  useEffect(() => {
    const getConversations = async () => {
      setIsLoading(false);
      try {
        const response = await axiosPrivate.get("/users");
        setConversations(response.data);
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(false);
        toast.error(error.response.data.error);
        throw new Error(error);
      }
    };
    getConversations();
  }, []);

  return { conversations, isLoading };
};

export default useGetConversations;
