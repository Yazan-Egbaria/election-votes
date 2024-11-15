import ImgContainer from "../../components/LoginPageComponents/ImgContainer";
import TextContainer from "../../components/LoginPageComponents/TextContainer";
import electionWallpaper from "../../assets/images/login-wallpaper.jpg";

const LoginContainer = () => {
  return (
    <div className="shadow-3xl flex h-4/6 w-3/6 items-center justify-center rounded">
      <TextContainer />
      <ImgContainer src={electionWallpaper} alt="Election Wallpaper" />
    </div>
  );
};

export default LoginContainer;
