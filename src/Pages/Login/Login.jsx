import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { signInUser, googleSignIng, githubSignIn } = useContext(AuthContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleGoogleSignIn = () => {
    googleSignIng()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log("Error in google login method", error);
      });
  };

  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log("Error in google login method", error);
      });
  };

  const onSubmit = (data) => {
    const { email, password } = data;
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(data);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-md shadow-md">
          <h2 className="text-3xl font-bold text-center">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                E-mail
              </label>
              <input
                type="text"
                {...register("email", { required: true })}
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Enter your username"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  maxLength: {
                    value: 16,
                    message: "Password cannot exceed 16 characters",
                  },
                })}
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Enter your password"
              />
              {errors.password && (
                <span className="text-red-600">{errors.password.message}</span>
              )}
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-sm text-gray-600">Remember Me</span>
              </label>
              <a href="#" className="text-sm text-indigo-600 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-black rounded-md hover:bg-gray-800"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-center text-gray-600">
            Do not have an account?{" "}
            <Link
              to="/registration"
              className="text-indigo-600 hover:underline"
            >
              Create Account
            </Link>
          </p>
          <div className="flex justify-center gap-10">
            <p
              onClick={handleGoogleSignIn}
              className="flex items-center gap-1 underline cursor-pointer"
            >
              <FaGoogle />
              Google
            </p>
            <p
              onClick={handleGithubSignIn}
              className="flex items-center gap-1 underline cursor-pointer"
            >
              <FaGithub />
              Github
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
