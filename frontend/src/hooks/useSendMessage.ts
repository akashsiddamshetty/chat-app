import { useState } from "react";
import { axiosPrivate } from "../axios/axios";
import useConversation from "../zustand/useConversation";
import { useForm } from "react-hook-form";

interface IMessage {
  message: string;
}
const useSendMessage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IMessage>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const sendMessage = handleSubmit(async (data) => {
    try {
      const response = await axiosPrivate.post(
        `/messages/send/${selectedConversation?._id}`,
        data
      );

      setMessages([...messages, response.data]);
    } catch (error: any) {
      throw new Error(error);
    } finally {
      reset();
      setIsLoading(false);
    }
  });

  return { isLoading, sendMessage, register, errors };
};

export default useSendMessage;
