/* eslint-disable no-unused-vars */
import { create } from "zustand";
import { IConversations, IMessage } from "../types/types";

interface IConversationStore {
  selectedConversation: IConversations | null;
  setSelectedConversation: (
    selectedConversation: IConversations | null
  ) => void;
  messages: IMessage[];
  setMessages: (messages: IMessage[]) => void;
}

const useConversation = create<IConversationStore>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation: IConversations | null) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages: IMessage[]) => set({ messages }),
}));

export default useConversation;
