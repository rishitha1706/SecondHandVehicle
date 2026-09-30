import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.city ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    if (formData.password.length < 6) {
      setError(
        "Password must contain at least 6 characters."
      );
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!formData.termsAccepted) {
      setError(
        "Please accept the Terms & Conditions to continue."
      );
      return;
    }

    const userData = {
      fullname: formData.name,
      email: formData.email,
      phone: formData.phone,
      city: formData.city,
      password: formData.password,
    };

    localStorage.setItem(
      "userData",
      JSON.stringify(userData)
    );

    alert("Registration successful!");

    navigate("/login");
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
          <h1>Create Account</h1>

          <p>
            Register to buy, sell and manage your vehicles.
          </p>
        </div>

        {/* Registration Form */}
        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          {/* Full Name */}
          <div className="auth-field">
            <label>
              Full Name *
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="auth-field">
            <label>
              Email Address *
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div className="auth-field">
            <label>
              Phone Number *
            </label>

            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* City / Location */}
          <div className="auth-field">
            <label>
              City / Location *
            </label>

            <input
              type="text"
              name="city"
              placeholder="Enter your city or location"
              value={formData.city}
              onChange={handleChange}
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
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="auth-field">
            <label>
              Confirm Password *
            </label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {/* Terms and Conditions */}
          <label className="terms-checkbox">

            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />

            <span>
              I agree to the{" "}
              <a
                href="#terms"
                onClick={(e) => e.preventDefault()}
              >
                Terms & Conditions
              </a>
            </span>

          </label>

          {/* Error */}
          {error && (
            <div className="auth-error">
              ⚠ {error}
            </div>
          )}

          {/* Create Account */}
          <button
            type="submit"
            className="auth-submit"
          >
            Create Account
          </button>

        </form>

        {/* Login Link */}
        <div className="auth-switch">

          Already have an account?{" "}

          <Link to="/login">
            Login
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Register;