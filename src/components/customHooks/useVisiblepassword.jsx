"use client";

import { useState } from "react";

export const useVisiblepassword = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return { isVisible, toggleVisibility };
};
