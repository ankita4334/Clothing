import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLs } = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handle form on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const responseData = await response.json();
      console.log("response data : ", responseData);

      if (response.ok) {
        storeTokenInLs(responseData.token);

        toast.success("Registration successful!");
        setUser({ username: "", email: "", password: "" });
        console.log(responseData);
        navigate("/login");
      } else {
        toast.error(
          responseData.extraDetails
            ? responseData.extraDetails.join(" ,")
            : responseData.message
        );
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="card w-full max-w-3xl bg-white shadow-xl p-8">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold">Register</h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          {/* Registration Form */}
          <div className="w-full lg:w-1/2">
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Username Field */}
              <div className="form-control">
                <label className="font-medium">Username</label>
                <div className="relative">
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </g>
                  </svg>
                  <input
                    type="text"
                    required
                    name="username"
                    placeholder="Username"
                    value={user.username}
                    onChange={handleInput}
                    pattern="[A-Za-z][A-Za-z0-9\-]*"
                    minLength="3"
                    maxLength="30"
                    title="Only letters, numbers, or dash"
                    className="input input-bordered w-full pl-10"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Must be 3 to 30 characters containing only letters, numbers,
                  or dashes.
                </p>
              </div>

              {/* Email Field */}
              <div className="form-control">
                <label className="font-medium">Email</label>
                <div className="relative">
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                  </svg>
                  <input
                    type="email"
                    name="email"
                    placeholder="mail@site.com"
                    value={user.email}
                    onChange={handleInput}
                    required
                    className="input input-bordered w-full pl-10"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Enter a valid email address.
                </p>
              </div>

              {/* Password Field */}
              <div className="form-control">
                <label className="font-medium">Password</label>
                <div className="relative">
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                      <circle
                        cx="16.5"
                        cy="7.5"
                        r=".5"
                        fill="currentColor"
                      ></circle>
                    </g>
                  </svg>
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    required
                    placeholder="Password"
                    minLength="8"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must include a number, a lowercase letter, and an uppercase letter"
                    className="input input-bordered w-full pl-10"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Must be at least 8 characters, including one number, one
                  lowercase letter, and one uppercase letter.
                </p>
              </div>

              <button className="btn btn-outline bg-black text-white w-full hover:bg-gray-900">
                Register
              </button>
            </form>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-gray-300 h-40"></div>
          <div className="lg:hidden w-full border-t border-gray-300"></div>

          {/* Login Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h6 className="text-xl font-semibold">Already have an account?</h6>
            <p className="text-gray-500 mt-2">
              Log in now to access your account and enjoy exclusive features!
            </p>
            <Link to="/login">
              <button className="btn bg-black text-white w-full lg:w-auto hover:bg-gray-900">
                Log in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
