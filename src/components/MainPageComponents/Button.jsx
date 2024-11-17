const Button = ({ text, onClick }) => {
  return (
    <button
      className="h-fit rounded bg-myBlue px-2 py-1 text-white transition-all duration-300 hover:bg-myHoverBlue"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
