import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../firebase.init";
import { motion } from "framer-motion";

const Login = () => {
  const [error, setError] = useState("");

  const { signInUser, googleSignIn } = use(AuthContext);

  const location = useLocation();

  //console.log(location);

  const navigate = useNavigate();

  const emailRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    //console.log(email, password);

    // login user
    signInUser(email, password)
      .then((result) => {
        //console.log(result.user);

        // eta oi portion ta jokon see more e click korbo tokon login page theke login korar por direct
        // show more page niye jabe jodi oi tstae ta thake ar nahole home e niye jabe
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        //console.log(error.message);
        const errorCode = error.code;
        setError(errorCode);
        toast(errorCode);
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        //console.log(location)
        //console.log(result.user);
        navigate(location.state || "/");
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };

  const handleForgetpassword = () => {
    console.log(emailRef.current.value);
    const email = emailRef.current.value;

    setError("");

    // send password reset email
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast("A password reset email is sent. Please check your email");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="card w-full max-w-sm bg-white shadow-2xl border border-green-200 p-6 rounded-xl"
      >
        <div className="card-body">
          <h1 className="text-3xl font-extrabold text-center text-green-700 mb-6">
            Login to <span className="text-green-500">GreenNest</span>
          </h1>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="label font-semibold text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                ref={emailRef}
                name="email"
                className="input input-bordered w-full focus:outline-green-400"
                placeholder="Email"
              />
            </div>

            <div>
              <label className="label font-semibold text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="input input-bordered w-full focus:outline-green-400"
                placeholder="Password"
              />
            </div>

            <div onClick={handleForgetpassword} className="text-right">
              <a className="link link-hover text-sm text-green-600">
                Forgot password?
              </a>
            </div>

            {/* error */}
            {error && (
              <p className="text-xs text-red-600 text-center">{error}</p>
            )}

            <button className="btn btn-success w-full">Login</button>

            {/* Google */}
            <button
              onClick={handleGoogleLogin}
              type="button"
              className="btn w-full bg-white text-gray-800 border border-gray-300 hover:shadow-md"
            >
              <svg
                aria-label="Google logo"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              <span className="ml-2">Login with Google</span>
            </button>

            <p className="font-semibold text-center pt-5">
              Don't have an account? Please{" "}
              <Link className="text-blue-600" to="/auth/register">
                Register
              </Link>
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;

// console.log(data)

// 4
