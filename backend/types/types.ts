export interface IUser {
  _id: string;
  fullname: string;
  username: string;
  password: string;
  gender: "male" | "female";
  profilePic?: string;
}
