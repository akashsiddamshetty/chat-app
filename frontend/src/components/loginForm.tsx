import { FC } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";
interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = () => {
  const { onSubmit, register, errors } = useLogin();

  return (
    <form onSubmit={onSubmit} className="">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="w-full text-center m-2 text-3xl font-semibold">
            Login <span className="text-blue-500">chat-app</span>
          </h1>
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
          <p>
            <span>Don't have a account yet? </span>
            <Link
              to={"/signup"}
              type="button"
              className="text-sky-500"
              // onClick={() => router.push("/signup")}
            >
              Signup now
            </Link>
          </p>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </div>
    </form>
  );
};
export default LoginForm;
