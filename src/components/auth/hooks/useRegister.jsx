"use client";
import { PatternMail } from "@/components/utils/PatternMail";
import { API_url } from "@/config/apiUrl";
import { useMemo, useState } from "react";
import toast from "react-hot-toast";

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [register, setRegister] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({
      ...register,
      [name]: value,
    });
  };

  const validateEmail = (value) => value.match(PatternMail);
  const isInvalid = useMemo(() => {
    if (register.email === "") return false;
    return validateEmail(register.email) ? false : true;
  }, [register.email]);

  const HandleRegister = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_url}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(register),
      });
      setLoading(false);
      console.log("response", response);

      toast.success(response.message);
    } catch (error) {
      setLoading(false);
      console.log("err", error);
      toast.error(error);
    }
  };

  return { register, handleChange, HandleRegister, isInvalid, loading };
};
