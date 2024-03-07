import { FC } from "react";
import { BiLogOut } from "react-icons/bi";
import axiosBase from "../axios/axios";
import { useAuth } from "../context/AuthProvider";

interface LogoutButtonProps {}

const LogoutButton: FC<LogoutButtonProps> = ({}) => {
  const { setAuthUser } = useAuth();
  const handleLogout = async () => {
    try {
      await axiosBase.post("/auth/logout");
      localStorage.removeItem("chat-user");
      setAuthUser(null);
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return (
    <div className="absolute my-auto bottom-5">
      <BiLogOut
        className="h-6 w-6 text-whtie cursor-pointer"
        onClick={() => handleLogout()}
      />
    </div>
  );
};
export default LogoutButton;
