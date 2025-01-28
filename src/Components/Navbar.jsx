import logo from "../assets/manager.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode , SiGeeksforgeeks } from"react-icons/si"

export const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="m -8 flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="w-15 h-11"></img>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
        <FaLinkedin />
        <FaGithub />
        <SiLeetcode />
        <SiGeeksforgeeks />
      </div>
    </nav>
  );
};
