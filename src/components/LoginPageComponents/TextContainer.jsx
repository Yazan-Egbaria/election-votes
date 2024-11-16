import Input from "./Input";
import { FaEyeSlash, FaUser } from "react-icons/fa";
import google from "../../assets/images/google.png";
import { useRef, useState } from "react";
import Users from "../../hooks/Users";
import { useNavigate } from "react-router-dom";

const TextContainer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passInputValue, setPassInputValue] = useState("");
  const [error, setError] = useState("");
  const emailInputRef = useRef(null);
  const passInputRef = useRef(null);
  const navigate = useNavigate();

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const { users } = Users();

  function isFormValid(e) {
    e.preventDefault();
    let isValid = true;

    const user = users.find(
      (user) =>
        user.email === emailInputRef.current.value &&
        user.password === passInputRef.current.value,
    );

    if (
      emailInputRef.current.value === "" &&
      passInputRef.current.value === ""
    ) {
      setError("Please fill out both fields.");
      isValid = false;
    } else if (emailInputRef.current.value === "") {
      setError("Please enter your email.");
      isValid = false;
    } else if (passInputRef.current.value === "") {
      setError("Please enter your password.");
      isValid = false;
    } else if (!user) {
      setError("Incorrect email or password.");
      isValid = false;
    } else {
      setError("");
    }

    return isValid;
  }

  const handleLoginClick = (e) => {
    e.preventDefault();
    if (isFormValid(e)) {
      navigate("/home");
    }
  };

  return (
    <div
      id="textContainer"
      className="flex h-1/2 w-full flex-col items-center justify-center gap-8 md:w-1/2"
    >
      <h1 className="text-myBlue text-2xl capitalize">Login to your account</h1>

      <form action="" className="flex flex-col gap-8" onSubmit={isFormValid}>
        <div className="flex flex-col gap-2">
          <Input
            icon={<FaUser />}
            type="email"
            placeholder="Johndoe@gmail.com"
            ref={emailInputRef}
            value={emailInputValue}
            onChange={(e) => setEmailInputValue(e.target.value)}
          />
          <Input
            icon={
              <FaEyeSlash
                className="cursor-pointer"
                onClick={handleVisibility}
              />
            }
            type={isVisible ? "text" : "password"}
            placeholder="Password"
            ref={passInputRef}
            value={passInputValue}
            onChange={(e) => setPassInputValue(e.target.value)}
          />
          <span id="error" className="text-xs text-red-500">
            {error}
          </span>
        </div>

        <div id="submitBtn">
          <button
            onClick={handleLoginClick}
            className="bg-myBlue hover:bg-myHoverBlue w-64 rounded px-2 py-1 font-normal text-white transition-all duration-300"
          >
            Login
          </button>
        </div>
      </form>

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
