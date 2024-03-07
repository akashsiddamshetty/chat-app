/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { ILoginFormValues } from "../types/types";
import { useAuth } from "../context/AuthProvider";
import { useState } from "react";
import axiosBase from "../axios/axios";
import toast from "react-hot-toast";

const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormValues>();
  const { setAuthUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      const response = await axiosBase.post("/auth/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setLoading(false);
      localStorage.setItem("chat-user", JSON.stringify(response.data));
      setAuthUser(response.data);
      toast.success("User logged successfully");
    } catch (error: any) {
      setLoading(false);
      setAuthUser(null);

      toast.error(error.response.data.error);
    }
  });

  return { register, errors, onSubmit, loading };
};

export default useLogin;
