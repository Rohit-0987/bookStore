import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex justify-center items-center h-screen w-screen ">
      <div id="my_modal_4" className="">
        <div className="modal-box p-10 w-96 border shadow-lg">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Signup</h3>
            <div className="space-y-6 ">
              <label className="form-control w-full max-w-xs ">
                <div className="label">
                  <span className="label-text text-lg text-white ">Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="input input-bordered w-full max-w-xs text-white"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </label>
              <label className="form-control w-full max-w-xs ">
                <div className="label">
                  <span className="label-text text-lg text-white ">Email</span>
                </div>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered w-full max-w-xs text-white"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-lg text-white">
                    Password
                  </span>
                </div>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered w-full max-w-xs text-white"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </label>
            </div>
            <div className="flex justify-around mt-6 space-x-5">
              <button className="bg-pink-500 rounded-lg text-white p-1 px-2 ">
                Signup
              </button>
              <p>
                Have Account?{" "}
                <span
                  onClick={() => {
                    document.getElementById("my_modal_3").showModal();
                  }}
                  className="underline text-blue-500 cursor-pointer"
                >
                  Login
                </span>
              </p>
              <Login />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
