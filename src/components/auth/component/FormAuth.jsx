"use client";
import React from "react";
import { useRegister } from "../hooks/useAuth";
import { useVisiblepassword } from "@/components/customHooks/useVisiblepassword";
import Link from "next/link";
import { Button, Input } from "@nextui-org/react";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { EyeFilledIcon } from "./EyeFilledIcon";
import SpinerButton from "./SpinerButton";

const FormAuth = ({ type }) => {
  const { isVisible, toggleVisibility } = useVisiblepassword();
  const {
    register,
    handleChange,
    HandleLogin,
    HandleRegister,
    isInvalid,
    loading,
  } = useRegister();
  return (
    <main className="space-y-3">
      {type == "register" && (
        <Input
          isRequired
          name="name"
          type="text"
          label="Name"
          isClearable
          value={register.name}
          onChange={handleChange}
        />
      )}

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

      {type == "register" ? (
        <div className="space-y-4">
          <Button
            isLoading={loading}
            spinner={<SpinerButton />}
            onClick={HandleRegister}
          >
            Register
          </Button>
          <div className="flex gap-1">
            <h1>Have an account?</h1>
            <Link href={"/login"}>Login</Link>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <Button
            isLoading={loading}
            spinner={<SpinerButton />}
            onClick={HandleLogin}
          >
            Login
          </Button>
          <div className="flex gap-1">
            <h1> Don't have an account?</h1>
            <Link href={"/register"}>Register</Link>
          </div>
        </div>
      )}
    </main>
  );
};

export default FormAuth;
