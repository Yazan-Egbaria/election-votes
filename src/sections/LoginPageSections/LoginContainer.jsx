import ImgContainer from "../../components/LoginPageComponents/ImgContainer";
import TextContainer from "../../components/LoginPageComponents/TextContainer";
import electionWallpaper from "../../assets/images/login-wallpaper.jpg";

const LoginContainer = () => {
  return (
    <div
      id="loginContainer"
      className="shadow-3xl flex h-full w-full flex-col-reverse items-center justify-center rounded md:h-4/6 md:flex-row xl:w-4/6 2xl:w-3/6"
    >
      <TextContainer />
      <ImgContainer src={electionWallpaper} alt="Election Wallpaper" />
    </div>
  );
};

export default LoginContainer;
