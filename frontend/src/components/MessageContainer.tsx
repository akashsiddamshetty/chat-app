import { FC } from "react";
import { TiMessages } from "react-icons/ti";
import useConversation from "../zustand/useConversation";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { useAuth } from "../context/AuthProvider";
interface MessageContainerProps {}

const MessageContainer: FC<MessageContainerProps> = () => {
  const { selectedConversation } = useConversation();
  return (
    <div className="md:min-w-[450px] w-full flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To: </span>
            <span className="text-gray-900 font-bold">
              {selectedConversation.fullname}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuth();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-1g md: text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>
          Welcome 👋
          {authUser?.fullname}
        </p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3x1 md:text-6x1 text-center" />
      </div>
    </div>
  );
};
