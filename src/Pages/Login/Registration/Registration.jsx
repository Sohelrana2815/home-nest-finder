import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Registration = () => {
  const { createUser } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data; // Destructure email and password from data

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate("/login");
        // Handle post-registration logic like redirecting the user, etc.
      })
      .catch((error) => {
        console.log(error);
        // Handle errors, like displaying an error message to the user
      });

    console.log(data); // This will log the entire form data
  };

  return (
    <>
      <Helmet>
        <title>Registration page</title>
      </Helmet>

      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-md shadow-md">
          <h2 className="text-3xl font-bold text-center">Register</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 4,
                    message: "Name must be at least 4 characters",
                  },
                })}
                type="text"
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Enter your name"
              />
              {errors.name && (
                <span className="text-red-600">{errors.name.message}</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Enter your email"
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
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).+$/,
                    message:
                      "Password must contain at least one uppercase letter, one lowercase letter, and one special character",
                  },
                })}
                type="password"
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Enter your password"
              />
              {errors.password && (
                <span className="text-red-600">{errors.password.message}</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Photo URL
              </label>
              <input
                {...register("photoUrl", { required: true })}
                type="text"
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Enter your photo URL"
              />
              {errors.photoUrl && (
                <span className="text-red-600">Photo Url is required</span>
              )}
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-black rounded-md hover:bg-gray-800"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
