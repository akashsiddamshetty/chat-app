import { FC } from "react";
import SignupForm from "../../components/signupForm";

interface SignupProps {}

const Signup: FC<SignupProps> = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <SignupForm />
    </div>
  );
};
export default Signup;
