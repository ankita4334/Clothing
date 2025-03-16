import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="card w-full max-w-3xl bg-white shadow-xl p-8">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold">Login</h2>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          {/* Login Form */}
          <div className="w-full lg:w-1/2">
            <form className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <button className="btn bg-black text-white w-full hover:bg-gray-900">
                Login
              </button>
            </form>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-gray-300 h-40"></div>
          <div className="lg:hidden w-full border-t border-gray-300"></div>

          {/* Register Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h6 className="text-xl font-semibold">Don't have an account?</h6>
            <p className="text-gray-500 mt-2">
              Sign up now to create an account and get started!
            </p>
            <Link to="/register">
              <button className="btn bg-black text-white w-full lg:w-auto hover:bg-gray-900">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
