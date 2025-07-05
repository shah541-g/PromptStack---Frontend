import { useState } from "react";
import { loginWithGoogle, loginWithGitHub, loginWithMail } from "../API/auth";
import { Bolt } from "lucide-react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { sendAuthenticationToken } from "../API/auth";
const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [isPending, setIsPending] = useState(false);
  const [loadingProvider, setLoadingProvider] = useState(null);
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (provider) => {
    setLoadingProvider(provider);
    setError(null);

    try {
      let result;
      if (provider === "google") {
        result = await loginWithGoogle();
      } else if (provider === "github") {
        result = await loginWithGitHub();
      }

      const user = result.user;
      const token = await user.getIdToken();
     await sendAuthenticationToken({ token }); 


      alert(`${provider} login successful!`);
    } catch (err) {
      console.error(err);
      setError(err.message || "Login failed.");
    } finally {
      setLoadingProvider(null);
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsPending(true);
  setError(null);

  try {
    const result = await loginWithMail(data);
    const user = result.user;
    const token = await user.getIdToken();

    localStorage.setItem("token", token);
    alert("Email login successful!");
  } catch (err) {
    console.error(err);
    setError(err.message || "Email login failed.");
  } finally {
    setIsPending(false);
  }
};


  return (
    <div className="h-screen flex justify-center items-center p-6 bg-base-200 overflow-hidden">
      <div className="flex md:flex-row rounded-xl overflow-hidden">
        <div className="flex flex-col justify-start items-start border border-primary/25 rounded-l-xl p-6 bg-base-100 shadow-lg w-full">
          <section className="flex justify-start items-center gap-2 mb-1">
            <Bolt className="size-9 text-primary" />
            <h1 className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
              PromStack
            </h1>
          </section>

          {error && (
            <div className="alert alert-error shadow-lg mb-2 w-full">
              <span className="text-white">{error}</span>
            </div>
          )}

          <section className="flex flex-col items-start justify-start mb-4">
            <h2 className="text-2xl">Sign In</h2>
            <p className="text-xs">
              Welcome back to PromStack! Log in to continue your journey.
            </p>
          </section>

          <form onSubmit={handleSubmit} className="w-full space-y-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={data.email}
                onChange={handleChange}
                placeholder="hello@gmail.com"
                className="input input-bordered rounded-md w-full"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                required
                value={data.password}
                onChange={handleChange}
                placeholder="********"
                className="input input-bordered rounded-md w-full"
              />
            </div>

            <button
              className="btn btn-primary w-full mt-6"
              type="submit"
              disabled={isPending}
            >
              {isPending ? (
                <span className="loading loading-spinner text-secondary" />
              ) : (
                "Sign In"
              )}
            </button>

            <p className="flex justify-center items-center text-sm">
              Don't have an account?
              <Link to="/signup" className="link link-primary ml-1">
                Sign Up
              </Link>
            </p>
          </form>

          <div className="w-full flex flex-col gap-2 mt-4">
            <button
              onClick={() => handleLogin("google")}
              className="flex items-center justify-center gap-2 bg-white border border-gray-300 text-black font-medium px-6 py-2 rounded hover:bg-gray-100 transition"
              disabled={loadingProvider === "google"}
            >
              {loadingProvider === "google" ? (
                "Signing in..."
              ) : (
                <>
                  <FcGoogle className="text-xl" />
                  Continue with Google
                </>
              )}
            </button>

            <button
              onClick={() => handleLogin("github")}
              className="flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-800 transition"
              disabled={loadingProvider === "github"}
            >
              {loadingProvider === "github" ? (
                "Signing in..."
              ) : (
                <>
                  <FaGithub className="text-xl" />
                  Continue with GitHub
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
