import { FC } from "react";
import { BiSend } from "react-icons/bi";
import useSendMessage from "../hooks/useSendMessage";
import ErrorText from "./ErrorText";

interface MessageInputProps {}

const MessageInput: FC<MessageInputProps> = ({}) => {
  const { isLoading, sendMessage, register, errors } = useSendMessage();

  return (
    <form className="px-4 my-3" onSubmit={sendMessage}>
      {errors.message?.type === "required" && (
        <ErrorText>{errors.message.message}</ErrorText>
      )}
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Send a message"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          {...register("message", { required: "Message is required" })}
        />

        {isLoading ? (
          <span className="loading loading-spinner"></span>
        ) : (
          <button
            type="submit"
            className="absolute inset-y-0 end-0 flex items-center pe-3"
          >
            <BiSend />
          </button>
        )}
      </div>
    </form>
  );
};
export default MessageInput;
