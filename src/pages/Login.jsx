import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState(
    localStorage.getItem("rememberedEmail") || ""
  );
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(
    !!localStorage.getItem("rememberedEmail")
  );
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    const storedData = localStorage.getItem("userData");

    if (!storedData) {
      setError("No account found. Please register first.");
      return;
    }

    const user = JSON.parse(storedData);

    if (
      email.trim().toLowerCase() !==
        user.email.trim().toLowerCase() ||
      password !== user.password
    ) {
      setError("Invalid email or password.");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");

    if (rememberMe) {
      localStorage.setItem("rememberedEmail", user.email);
    } else {
      localStorage.removeItem("rememberedEmail");
    }

    navigate("/dashboard");
  };

  const handleForgotPassword = () => {
    setError("");
    setMessage("");

    const storedData = localStorage.getItem("userData");

    if (!storedData) {
      setError("No account found. Please register first.");
      return;
    }

    const user = JSON.parse(storedData);

    if (!email.trim()) {
      setError("Please enter your email address first.");
      return;
    }

    if (
      email.trim().toLowerCase() !==
      user.email.trim().toLowerCase()
    ) {
      setError("No account found with this email address.");
      return;
    }

    setMessage(
      "Password reset instructions would be sent to your registered email."
    );
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        {/* Logo */}
        <div className="auth-logo">
          🚗{" "}
          <span>
            Auto<span>Mart</span>
          </span>
        </div>

        {/* Heading */}
        <div className="auth-heading">
          <h1>Welcome Back</h1>

          <p>
            Login to your AutoMart account.
          </p>
        </div>

        {/* Login Form */}
        <form
          className="auth-form"
          onSubmit={handleLogin}
        >

          {/* Email */}
          <div className="auth-field">
            <label>
              Email Address *
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
                setMessage("");
              }}
              required
            />
          </div>

          {/* Password */}
          <div className="auth-field">
            <label>
              Password *
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
                setMessage("");
              }}
              required
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="login-options">

            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => {
                  setRememberMe(e.target.checked);
                }}
              />

              <span>Remember Me</span>
            </label>

            <button
              type="button"
              className="forgot-password"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </button>

          </div>

          {/* Error */}
          {error && (
            <div className="auth-error">
              ⚠ {error}
            </div>
          )}

          {/* Success */}
          {message && (
            <div className="auth-success">
              ✓ {message}
            </div>
          )}

          {/* Login Button */}
          <button
            type="submit"
            className="auth-submit"
          >
            Login
          </button>

        </form>

        {/* Register Link */}
        <div className="auth-switch">
          Don't have an account?{" "}

          <Link to="/register">
            Register
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Login;