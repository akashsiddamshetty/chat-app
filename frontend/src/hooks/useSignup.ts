/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { ISignupFormValues } from "../types/types";
import { useState } from "react";
import axiosBase from "../axios/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useSignupForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<ISignupFormValues>();
  const [loading, setLoading] = useState(false);
  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      await axiosBase.post("auth/signup", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setLoading(false);
      navigate("/login");
      toast.success("User Signedup successfully");
    } catch (error: any) {
      setLoading(false);
      toast.error(error.response.data.error);
    }
  });

  return { register, errors, onSubmit, getValues, loading };
};

export default useSignupForm;
