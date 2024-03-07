import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import { axiosPrivate } from "../axios/axios";

const useGetMessages = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setIsLoading(true);
      try {
        const response = await axiosPrivate.get(
          `/messages/${selectedConversation?._id}`
        );
        setMessages(response.data);
      } catch (error: any) {
        throw new Error(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (selectedConversation?._id) getMessages();
  }, [selectedConversation, setMessages]);
  return { isLoading, messages };
};

export default useGetMessages;
