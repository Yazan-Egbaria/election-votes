import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleLogoutClick = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  return (
    <nav className="flex h-20 basis-0 items-center justify-between p-4 shadow-md">
      <img src="../../../public/votes.jpg" alt="logo" className="w-16" />
      {loggedInUser?.admin && <Button text="Dashboard" />}
      <Button text="Log Out" onClick={handleLogoutClick} />
    </nav>
  );
};

export default Navbar;
