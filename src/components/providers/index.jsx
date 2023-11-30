"use client";

import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";

const UiProvider = ({ children }) => {
  return (
    <NextUIProvider>
      <div>{children}</div>
      <Toaster />
    </NextUIProvider>
  );
};

export default UiProvider;
