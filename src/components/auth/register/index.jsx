"use client";

import { Button, Input } from "@nextui-org/react";
import { useVisiblepassword } from "@/components/customHooks/useVisiblepassword";
import { EyeFilledIcon } from "../component/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../component/EyeSlashFilledIcon";
import SpinerButton from "../component/SpinerButton";
import { useRegister } from "../hooks/useRegister";

const Register = () => {
  const { isVisible, toggleVisibility } = useVisiblepassword();
  const { register, handleChange, HandleRegister, isInvalid, loading } =
    useRegister();

  return (
    <main className="space-y-3">
      <Input
        isRequired
        name="email"
        type="email"
        label="Email"
        isClearable
        value={register.email}
        isInvalid={isInvalid}
        color={isInvalid ? "danger" : "success"}
        errorMessage={isInvalid && "Please enter a valid email"}
        onChange={handleChange}
      />

      <Input
        label="Password"
        isRequired
        variant="bordered"
        placeholder="Enter your password"
        onChange={handleChange}
        name="password"
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

      <Button
        isLoading={loading}
        spinner={<SpinerButton />}
        onClick={HandleRegister}
      >
        Register
      </Button>
    </main>
  );
};

export default Register;
