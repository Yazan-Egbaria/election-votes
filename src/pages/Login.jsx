import LoginContainer from "../sections/LoginPageSections/LoginContainer";

const Login = () => {
  return (
    <div
      id="loginPage"
      className="container mx-auto flex h-dvh items-center justify-center p-4 md:h-screen md:p-6 lg:p-8 xl:p-12 2xl:px-16"
    >
      <LoginContainer />
    </div>
  );
};

export default Login;
