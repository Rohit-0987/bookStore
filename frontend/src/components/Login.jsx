import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Login</h3>
              <div className="space-y-6 ">
                <label className="form-control w-full max-w-xs ">
                  <div className="label">
                    <span className="label-text text-lg text-white ">
                      Email
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Email"
                    className="input input-bordered w-full max-w-xs text-white"
                    {...register("email", { required: true })}
                  />
                  <br />
                  {errors.password && <span className="text-sm text-red-500">This field is required</span>}
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-lg text-white">
                      Password
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Password"
                    className="input input-bordered w-full max-w-xs text-white"
                    {...register("password", { required: true })}
                  />
                  <br />
                  {errors.password && <span className="text-sm text-red-500">This field is required</span>}
                </label>
              </div>
              <div className="flex justify-around mt-4">
                <button  className="bg-pink-500 rounded-lg text-white p-1 px-2 ">
                  Login
                </button>
                <p>
                  Not Registerd?{" "}
                  <Link
                    to="/signup"
                    className="underline text-blue-500 cursor-pointer"
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
