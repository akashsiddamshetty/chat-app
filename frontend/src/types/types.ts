export interface ILoginFormValues {
  username: string;
  password: string;
}
export interface ISignupFormValues {
  fullname: string;
  username: string;
  confirmPassword: string;
  password: string;
  gender: "male" | "female";
}

export interface IUser {
  _id: string;
  fullname: string;
  username: string;
  profilePic: string;
}

export interface IConversations {
  _id: string;
  fullname: string;
  username: string;
  password: string;
  gender: string;
  profilePic: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IMessage {
  _id: string;
  createdAt: string;
  message: string;
  receiverId: string;
  senderId: string;
  updatedAt: string;
  __v: number;
}
