/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { IMessage } from "../types/types";
import { useAuth } from "../context/AuthProvider";
import useConversation from "../zustand/useConversation";
import { extractTime } from "../utils/extractTime";

interface MessageProps {
  message: IMessage;
}

const Message: FC<MessageProps> = ({ message }) => {
  const { authUser } = useAuth();
  const { selectedConversation } = useConversation();
  const formMe = message.senderId === authUser?._id;
  return (
    <div className={`chat ${formMe ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src={
              formMe ? authUser?.profilePic : selectedConversation?.profilePic
            }
            alt="user avatar"
          />
        </div>
      </div>
      <div className={`chat-bubble text-white ${formMe ? "bg-blue-500" : ""}`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {extractTime(message.createdAt)}
      </div>
    </div>
  );
};
export default Message;
