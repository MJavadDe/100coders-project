import React, { useEffect } from "react";

const Input = ({ type, placeholder, className, ref }) => {
  return (
    <input
      ref={ref}
      dir="rtl"
      className={`font-vazir rounded bg-white placeholder:text-primary shadow-md px-2 py-1 outline-none text-blue h-[50px] ${className}`}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
