"use client";

import { Button, Input } from "@nextui-org/react";
import React, { useMemo, useState } from "react";

import { PatternMail } from "@/components/utils/PatternMail";
import { EyeSlashFilledIcon } from "../component/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../component/EyeFilledIcon";
import SpinerButton from "../component/SpinerButton";

const Register = () => {
  const [register, setRegister] = useState({
    email: "",
    password: "",
  });

  // visible password
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  //   validate email
  const validateEmail = (value) => value.match(PatternMail);

  const isInvalid = useMemo(() => {
    if (register.email === "") return false;
    return validateEmail(register.email) ? false : true;
  }, [register.email]);

  return (
    <main className="space-y-3">
      <Input
        isRequired
        type="email"
        label="Email"
        isClearable
        value={register.email}
        isInvalid={isInvalid}
        color={isInvalid ? "danger" : "success"}
        errorMessage={isInvalid && "Please enter a valid email"}
        onValueChange={(value) => setRegister({ ...register, email: value })}
      />

      <Input
        label="Password"
        isRequired
        variant="bordered"
        placeholder="Enter your password"
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
        className="max-w-xs"
      />

      <Button isLoading={false} spinner={<SpinerButton />}>
        Register
      </Button>
    </main>
  );
};

export default Register;
