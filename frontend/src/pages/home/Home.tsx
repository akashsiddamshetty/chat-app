import { FC } from "react";
import Sidebar from "../../components/Sidebar";
import MessageContainer from "../../components/MessageContainer";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default Home;
