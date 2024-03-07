import { FC } from "react";
import { Link } from "react-router-dom";
import useSignupForm from "../hooks/useSignup";

interface SignupFormProps {}

const SignupForm: FC<SignupFormProps> = () => {

  const { onSubmit, register, getValues, errors } = useSignupForm();

  return (
    <form onSubmit={onSubmit} className="">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="w-full text-center m-2 text-3xl font-semibold">
            Signup <span className="text-blue-500">chat-app</span>
          </h1>
          <label className="input input-bordered flex items-center gap-2">
            Full Name
            <input
              type="text"
              className="grow"
              placeholder="Ex. Daisy"
              {...register("fullname", { required: true })}
            />
          </label>
          {errors.fullname?.type === "required" && (
            <p className="text-red-500">Fullname is required</p>
          )}
          <label className="input input-bordered flex items-center gap-2">
            username
            <input
              type="text"
              className="grow"
              placeholder="Ex. Daisy"
              {...register("username", { required: true })}
            />
          </label>
          {errors.username?.type === "required" && (
            <p className="text-red-500">Username is required</p>
          )}
          <label className="input input-bordered flex items-center gap-2">
            Password
            <input
              type="password"
              className="grow"
              placeholder="password"
              {...register("password", { required: true })}
            />
          </label>
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required</p>
          )}
          <label className="input input-bordered flex items-center gap-2">
            Confirm Pass
            <input
              type="password"
              className="grow"
              placeholder="confirm password"
              {...register("confirmPassword", {
                required: true,
                validate: (value) =>
                  value === getValues("password") ||
                  "The passwords do not match",
              })}
            />
          </label>
          {errors.confirmPassword?.type === "required" && (
            <p className="text-red-500">Confirm Passoword is required</p>
          )}
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}

          <label className="input input-bordered flex items-center gap-2 ">
            Gender
            <label
              htmlFor="male"
              className="flex items-center justify-center gap-1 cursor-pointer"
            >
              <input
                type="radio"
                className="grow"
                value="male"
                id="male"
                // {...register("gender", { required: true })}
              />
              <span>Male</span>
            </label>
            <label
              htmlFor="female"
              className="flex items-center justify-center gap-1 cursor-pointer"
            >
              <input
                type="radio"
                className="grow"
                value="female"
                id="female"
                {...register("gender", { required: true })}
              />
              <span>Female</span>
            </label>
          </label>
          {errors.gender?.type === "required" && (
            <p className="text-red-500">Gender is required</p>
          )}

          <p>
            <span>Already have an account? </span>
            <Link to={"/login"} type="button" className="text-sky-500">
              Login here
            </Link>
          </p>
          <button className="btn btn-primary">Signup</button>
        </div>
      </div>
    </form>
  );
};
export default SignupForm;
