import { FC } from "react";
import { generateRandomCoolEmoji } from "../utils/utils";
import Converstation from "./Conversation";
import useGetConversations from "../hooks/useGetConversations";

interface ConverstationsProps {}

const Converstations: FC<ConverstationsProps> = () => {
  const { isLoading, conversations } = useGetConversations();
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, index) => {
        return (
          <Converstation
            key={conversation._id}
            conversation={conversation}
            lastIndex={index === conversations.length - 1}
            emoji={generateRandomCoolEmoji()}
          />
        );
      })}
      {isLoading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};
export default Converstations;
