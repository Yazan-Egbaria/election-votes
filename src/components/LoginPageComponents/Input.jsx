const Input = ({ type, placeholder, icon }) => {
  return (
    <div className="border-myBlue flex w-64 items-center gap-2 rounded border bg-white px-4 py-2 text-xs">
      <span className="text-myBlue">{icon}</span>
      <span className="text-myBlue">|</span>
      <input
        className="text-myBlue placeholder:text-myLowBlue w-full placeholder:text-xs focus:border-none focus:outline-none"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
