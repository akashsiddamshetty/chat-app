import { Schema, Document, model } from "mongoose";

export interface IConversation extends Document {
  participants: string[];
  messages: string[];
}

const conversationSchema = new Schema(
  {
    participants: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: "Message",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const Conversation = model<IConversation>("Conversation", conversationSchema);
export default Conversation;
