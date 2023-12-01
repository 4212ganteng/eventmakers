"use client";
import { PatternMail } from "@/components/utils/PatternMail";
import { API_url } from "@/config/apiUrl";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import toast from "react-hot-toast";

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter();

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

  const HandleAuth = async (url, redirect) => {
    setLoading(true);
    const response = await fetch(API_url + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(register),
    });

    const result = await response.json();
    console.log("resulttt", result);

    if (!result.error) {
      setLoading(false);
      toast.success("Register succes, waiting to redirect");

      console.log("response ===>", response);

      setTimeout(() => {
        router.push(redirect);
      }, 3000);
    } else {
      setLoading(false);
      console.log("err ===>", result.message);
      toast.error(`Failed register ${result.message}`);
    }
  };

  return { register, handleChange, HandleAuth, isInvalid, loading };
};
