import { FC } from "react";
import LoginForm from "../../components/loginForm";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <LoginForm />
    </div>
  );
};
export default Login;
