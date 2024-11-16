import React, { forwardRef } from "react";
const Input = forwardRef(
  ({ type, placeholder, icon, onChange, value }, ref) => {
    return (
      <div
        id="input"
        className="border-myBlue flex w-64 items-center gap-2 rounded border bg-white px-4 py-2 text-xs"
      >
        <span className="text-myBlue">{icon}</span>
        <span className="text-myBlue">|</span>
        <input
          className="text-myBlue placeholder:text-myLowBlue w-full placeholder:text-xs focus:border-none focus:outline-none"
          type={type}
          placeholder={placeholder}
          ref={ref}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  },
);

export default Input;
