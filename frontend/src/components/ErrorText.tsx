import { FC, ReactNode } from "react";

interface ErrorTextProps {
  children: ReactNode;
}

const ErrorText: FC<ErrorTextProps> = ({ children }) => {
  return <p className="text-red-500 capitalize">{children}</p>;
};
export default ErrorText;
