import { FC } from "react";
import useGetMessages from "../hooks/useGetMessages";
import MessageSkeleton from "./MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../hooks/useListenMessages";

interface MessagesProps {}

const Messages: FC<MessagesProps> = ({}) => {
  const { messages, isLoading } = useGetMessages();
  useListenMessages();
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!isLoading &&
        messages.length !== 0 &&
        messages.map((message) => {
          return <Message key={message._id} message={message} />;
        })}
      {isLoading && [...Array(3)].map((_, i) => <MessageSkeleton key={i} />)}
      {!isLoading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};
export default Messages;
