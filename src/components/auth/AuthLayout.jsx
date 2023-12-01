import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:block lg:bg-sky-400" />

      <div className="flex justify-center items-center ">
        <section className="w-[320px] ">{children}</section>
      </div>
    </div>
  );
};

export default AuthLayout;
