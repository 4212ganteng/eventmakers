import AuthLayout from "@/components/auth/AuthLayout";
import React from "react";

const Layout = ({ children }) => {
  return (
    <section>
      <AuthLayout>{children}</AuthLayout>
    </section>
  );
};

export default Layout;
