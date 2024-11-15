import Input from "./Input";
import { FaEyeSlash, FaUser } from "react-icons/fa";
import google from "../../assets/images/google.png";
import { useState } from "react";

const TextContainer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex h-full w-[50%] flex-col items-center justify-center gap-8">
      <h1 className="text-myBlue text-2xl capitalize">Login to your account</h1>

      <div className="flex flex-col gap-2">
        <Input icon={<FaUser />} type="email" placeholder="Johndoe@gmail.com" />
        <Input
          icon={
            <FaEyeSlash className="cursor-pointer" onClick={handleVisibility} />
          }
          type={isVisible ? "text" : "password"}
          placeholder="Password"
        />
      </div>

      <div id="submitBtn">
        <a href="/">
          <button className="bg-myBlue hover:bg-myHoverBlue w-64 rounded px-2 py-1 font-normal text-white transition-all duration-300">
            Login
          </button>
        </a>
      </div>

      <div id="border" className="thinBorder"></div>

      <div id="loginWithGoogle">
        <a href="/">
          <button className="border-myBlue text-myBlue flex w-64 items-center justify-center gap-2 rounded border px-2 py-1 transition-all duration-300 hover:shadow">
            Sign In With <img className="w-5" src={google} alt="Google" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default TextContainer;
